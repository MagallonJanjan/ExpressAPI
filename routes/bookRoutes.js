const express = require("express");
const router = express.Router();
const Book = require('../controller/bookstoreController') 


router.post('/', Book.addBook);
router.get('/books', Book.getBooks);
router.get('/books/:id', Book.getBookById);
router.patch('/:id', Book.updateBook);
router.delete('/:id', Book.deleteBook)


module.exports = router;
