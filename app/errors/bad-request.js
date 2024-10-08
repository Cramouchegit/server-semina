// Import http-status-codes
const { StatusCodes } = require("http-status-codes");
// Import CustomAPIError
const CustomAPIError = require("./custom-api-error");

class BadRequest extends CustomAPIError {
  constructor(message) {
    super(message);
    // Memberikan status code bad request
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

module.exports = BadRequest;
