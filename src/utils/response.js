class ApiResponse {
  /**
   * Returns a success response with the status code , message and data. To be used for status code in the 2xx range
   * @static
   * @param { res } object - The response object
   * @param { statusCode } number - The status code.
   * @param { message } string - The success message.
   * @param { data } object - The success data
   * @returns { res } object - The response object
   */

  static successResponse(res, statusCode, message, data) {
    return res.status(statusCode).json({ status: 'success', message, data });
  }

  /**
   * Returns a success response with the status code , message and data. To be used for status code in the 2xx range
   * @static
   * @param { res } object - The response object
   * @param { statusCode } number - The status code.
   * @param { message } string - The success message
   * @returns { res } object - The response object
   */

  static errorResponse(res, statusCode, message) {
    return res.status(statusCode).json({ status: false, message });
  }
}

module.exports = ApiResponse;
