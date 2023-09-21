class CustomAPIError extends Error {
  constructor(message, satausCode) {
    super(message);
    this.satausCode = satausCode;
  }
}
module.exports = CustomAPIError;
