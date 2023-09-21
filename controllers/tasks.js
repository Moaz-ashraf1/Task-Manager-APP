const Task = require("../models/Task");
const asyncWrapper = require("../middleware/async");
const AppError = require("../middleware/custome-error");
const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

const createTask = asyncWrapper(async (req, res, next) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

const getSingleTask = asyncWrapper(async (req, res, next) => {
  const task = await Task.findOne({ _id: req.params.id });

  if (!task) {
    return next(new AppError(`No task with id : ${req.params.id}`, 404));
  }
  res.status(200).json({ task });
});
const updateTask = asyncWrapper(async (req, res, next) => {
  const task = await Task.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return next(new AppError(`No task with id : ${req.params.id}`, "404"));
  }
  res.status(200).json({ task });
});

const deleteTask = asyncWrapper(async (req, res, next) => {
  const task = await Task.findByIdAndDelete({ _id: req.params.id });

  if (!task) {
    return next(new AppError(`No task with id : ${req.params.id}`, 404));
  }
  res.status(200).json({ task: null, status: "success" });
});

module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
