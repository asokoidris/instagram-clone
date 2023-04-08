const express = require('express');

const router = express.Router();

const AuthController = require('../controller/auth-controller');
const { validate } = require('../validation/validatorClass');
const {
  createUserSchema,
  loginUserSchema,
} = require('../validation/schema/user');

router.post('/signup', validate(createUserSchema), AuthController.createUser);

router.post('/login', validate(loginUserSchema), AuthController.login);

module.exports = router;
