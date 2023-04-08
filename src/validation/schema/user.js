const joi = require('joi');

const createUserSchema = joi.object({
  username: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().min(6).max(30).required(),
});

const loginUserSchema = joi
  .object({
    username: joi.string(),
    email: joi.string().email(),
    password: joi.string().min(6).max(30).required(),
  })
  .or('username', 'email');

module.exports = {
  createUserSchema,
  loginUserSchema,
};
