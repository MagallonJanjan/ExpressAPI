const express = require('express');
const app = express();
 const bodyParser = require('body-parser');

const database = require("./services/database");
const BookRouter = require("./routes/bookRoutes");

app.use(bodyParser.json());

app.use('/api/bookstore',BookRouter);
database.connect();

app.listen(8000, console.log("The server is running on port 8000"));