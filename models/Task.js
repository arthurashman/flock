const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  date_added: {
    type: Date,
    default: Date.now
  },
  subtasks: {
    type: Array
  }
});

module.exports = Task = mongoose.model('task', TaskSchema);