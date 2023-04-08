const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

/**
 * @description - This is a class that contains helper functions used across the application.
 */

class HelperFunctions {
  /**
   * @description - This method is used to hash a password
   * @param {string} password - The password to be hashed
   * @returns {string} - Returns a string
   * @memberof HelperFunctions
   */

  static hashPassword(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  }

  /**
   * @description - This method is used to compare a password
   * @param {string} password - The password to be compared
   * @param {string} hashedPassword - The hashed password to be compared with
   * @returns {string} - Returns a string
   * @memberof HelperFunctions
   */
  static comparePassword(password, hashedPassword) {
    return bcrypt.compareSync(password, hashedPassword);
  }

  /**
   * @description - This method is used to generate a token
   * @param {string}  string - The string sent
   * @returns {string} - Returns a formatted string with capitalized first letter
   * @memberof HelperFunctions
   */
  static capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  /**
   * @description - This method is used to validate an mongoose id
   * @param {string} id - The id to be validated
   * @returns {boolean} - Returns a boolean
   * @memberof HelperFunctions
   */
  static isValidMongoId(id) {
    return mongoose.Types.ObjectId.isValid(id);
  }

  /**
   * @description - This method is a custom validator for joi
   * @param {value} value - The value to be validated
   * @param {helpers} helpers - The helpers object
   * @returns {string} - Returns a string
   * @memberof HelperFunctions
   */
  static validateMongoId(value, helpers) {
    if (!mongoose.Types.ObjectId.isValid(value)) {
      return helpers.message('any.invalid');
    }
    return value;
  }
}

module.exports = HelperFunctions;
