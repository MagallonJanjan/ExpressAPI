const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))


const database = require("./services/database");
const BookRouter = require("./routes/books");

app.use(express.json());
app.use(BookRouter);
database.connect();

app.listen(8000, console.log("The server is running on port 8000"));