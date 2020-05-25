const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  subtasks: {
    type: Array,
    required: true
  },
  completed: {
    type: Boolean,
    default: false,
    required: true
  }
});

module.exports = Task = mongoose.model('task', TaskSchema);