const express = require("express");
const router = express.Router();
const Book = require('../controller/bookstoreController') 


router.post('/api/bookstore', Book.addBook);
router.get('/api/bookstore/books', Book.getBooks);
router.get('/api/bookstore/books/:id', Book.getBookById);
router.patch('/api/bookstore/:id', Book.updateBook);
router.delete('/api/bookstore/:id', Book.deleteBook)


module.exports = router;
