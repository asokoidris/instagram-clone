const UserModel = require('../models/user.model');
const HelperFunctions = require('../utils/helper-functions');
const { successResponse, errorResponse } = require('../utils/response');
const jwt = require('jsonwebtoken');
const Token = require('../utils/token');

/**
 * @description - This is a class that contains methods for user authentication and authorization.
 */

class AuthService {
  /**
   * @description - This method is used to signup a user
   * @param {object} userData - The user data
   * @returns {object} - Returns an object
   * @memberof UserService
   */
  static async signup(data) {
    const { email, username, password } = data;
    const user = await UserModel.findOne({ email: email.toLowerCase() });

    if (user)
      return {
        statusCode: 409,
        message: 'User already exists',
      };

    const hashedPassword = HelperFunctions.hashPassword(password);
    const newUser = await UserModel.create({
      email: email.toLowerCase(),
      username: username.toLowerCase(),
      password: hashedPassword,
    });

    logger.info(`User created with email: ${email}`);
    // remove password from the response
    newUser.password = undefined;
    return {
      statusCode: 201,
      message: 'User created successfully',
      data: newUser,
    };
  }

  /**
   * @description - This method is used to login a user
   * @param {object} userData - The user data
   * @returns {object} - Returns an object
   * @memberof UserService
   
   */
  static async login(data) {
    const { email, password } = data;
    const user = await UserModel.findOne({ email });

    if (!user)
      return {
        statusCode: 404,
        message: 'User does not exist',
      };

    const isPasswordValid = HelperFunctions.comparePassword(
      password,
      user.password
    );

    if (!isPasswordValid)
      return {
        statusCode: 401,
        message: 'Invalid password',
      };

    const accessToken = Token.generateToken(user);
    logger.info(`User logged in with email: ${email}`);
    user.password = undefined;
    return {
      statusCode: 200,
      message: 'User logged in successfully',
      data: {
        user,
        accessToken,
      },
    };
  }
}
module.exports = AuthService;
