const { request, response } = require("express");
const {replaceOne, update} = require("../models/Books");
const BookLibrary = require("../models/Books");
const parseRequestBody = require("../utils/parseRequestBody");

const getBooks = async (request, response) =>{
    try{
        const books = await BookLibrary.find();
        if(!books){
            return response.status(404).json({
                error: "Error in getting books!",
            });
        }
        response.status(200).json({
            books: books,
        });
    }catch(e){
        return response.status(404).json({
            error: e,
        });
    }
};

const getBookById = async(request, response) =>{
    try{
        const book = await BookLibrary.find({_id: request.params.id});
        
        if (!book || book.length === 0){
            return response.status(404).json({
                error: "Book is not found!",
            });
        }
        response.status(200).json({
            book: book,
        });
    }catch(e){
        return response.status(404).json({
            error: e,
        });
    }
};

const addBook = async(request, response) =>{
    try{
        const book = {
            title: request.body.title,
            author: request.body.author,
            genre: request.body.genre,
            yearPublished: request.body.yearPublished,
            price: request.body.price
        };

        const newBook = new BookLibrary(book);
        const result = await newBook.save();

        if(!result){
            return response.status(404).json({
                error: "Error in adding new book!",
            });
        }
        response.status(200).json({
            message: "New Book added!",
        });
    }catch(e){
        return response.status(404).json({
            error: e
        });
    }
};

const updateBook  = async(request,  response) =>{
    const updates = parseRequestBody(request.body);
    try{
        const result = await BookLibrary.updateOne(
            {_id: request.params.id},
            {$set:updates}
        );
        if (!result) {
            return response.status(404).json({
                error: "Error in updating movie!",
            })
        }
        response.status(200).json({
            result: result,
        });
    }catch(e){
        return response.status(404).json({
            error: e
        })
    }
};

const deleteBook = async(request,response) => {
    try{
        await BookLibrary.deleteOne({_id:request.params.id},(error, result)=>{
            if (error) {
                return response.status(400).json({
                  error: error,
                });
        }
        response.status(200).json({
            message: "Successfully deleted movie",
            result: result,
            });
        });
    }
        catch (e) {
            return response.status(400).json({
              error: e,
            });
    }
}

module.exports = {
    addBook,
    getBooks,
    getBookById,
    updateBook,
    deleteBook
}