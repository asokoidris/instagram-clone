const AuthService = require('../service/auth-service');
const { successResponse, errorResponse } = require('../utils/response');

/**
 * @description - This is a class that contains methods for user authentication and authorization.
 *  @class Controller
 * @exports Controller
 * @classdesc - This is a class that contains methods for user authentication and authorization.
 */

class AuthController {
  /**
   * @description - This method is used to signup a user
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @returns {object} - Returns an object
   * @memberof UserController
   */

  static async createUser(req, res) {
    try {
      const { body } = req;
      const result = await AuthService.signup(body);
      if (result.statusCode == 409)
        return errorResponse(res, result.statusCode, result.message);
      logger.info(
        `User created successfully with email: ${JSON.stringify(result)}`
      );
      return successResponse(res, 201, 'User created successfully', result);
    } catch (error) {
      logger.error(`Error in creating user: ${JSON.stringify(error.message)}`);
      return errorResponse(res, 500, 'Oops! Something went wrong');
    }
  }

  /**
   * @description - This method is used to login a user
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @returns {object} - Returns an object
   * @memberof UserController
   */
  static async login(req, res) {
    try {
      const { body } = req;
      const result = await AuthService.login(body);
      if (result.statusCode == 404)
        return errorResponse(res, result.statusCode, result.message);
      logger.info(
        `User logged in successfully with email: ${JSON.stringify(result)}`
      );
      return successResponse(res, 200, 'User logged in successfully', result);
    } catch (error) {
      logger.error(
        `Error in logging in user: ${JSON.stringify(error.message)}`
      );
      return errorResponse(res, 500, 'Oops! Something went wrong');
    }
  }
}

module.exports = AuthController;
