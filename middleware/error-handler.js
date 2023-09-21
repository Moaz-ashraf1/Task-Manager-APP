const AppError = require("../middleware/custome-error");
const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof AppError) {
    return res.status(err.satausCode).json({
      msg: err.message,
    });
  }
  return res.status(500).json({ msg: "Something went wrong.Please try again" });
};

module.exports = errorHandlerMiddleware;
