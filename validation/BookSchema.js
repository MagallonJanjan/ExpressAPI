const Joi = require("joi");

const BookSchema = Joi.object({
  title: Joi.string().required().min(4).max(25),
  author: Joi.string().required().min(4).max(25),
  genre: Joi.string().required().min(3).max(25),
  yearPublished: Joi.date().required(),
  price : Joi.number().required(),
});

module.exports = BookSchema;