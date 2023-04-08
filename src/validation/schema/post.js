const joi = require('joi');
const mongoose = require('mongoose');
const { validateMongoId } = require('../../utils/helper-functions');

const createPostSchema = joi.object({
  title: joi.string().required(),
  content: joi.string().required(),
  imageUrl: joi.string().required(),
  creator: joi.string().required(),
  categories: joi.array().items(joi.string().required()).required(),
  postedTo: joi.string().required(),
  image: joi.string().required(),
});

const getPostByIdSchema = joi.object({
  id: joi.string().required(),
});

const updatePostSchema = joi.object({
  title: joi.string(),
  content: joi.string(),
  imageUrl: joi.string(),
  creator: joi.string(),
  categories: joi.array().items(joi.string()),
});

const deletePostSchema = joi.object({
  id: joi.string().required(),
});

module.exports = {
  createPostSchema,
  getPostByIdSchema,
  updatePostSchema,
  deletePostSchema,
};
