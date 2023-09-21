/*

if the schema defines the structure for document like type, vaildation and etc

 mongoose model provides an interface to the database

using model wil be able to create update query and delete our document

*/
const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide name"],
    trim: true,
    maxlength: [20, "name can not be more than 20 characters "],
  },
  completed: { type: Boolean, default: false },
});

module.exports = mongoose.model("Task", TaskSchema);
