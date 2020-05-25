const mongoose = require('mongoose')

const SubtaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  additional_info: {
    type: String,
  },
  completed: {
    type: Boolean,
    default: false
  },
  date_added: {
    type: Date,
    default: Date.now
  }
});

module.exports = Subtask = mongoose.model('subtask', SubtaskSchema);