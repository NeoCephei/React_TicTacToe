const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  author : {type: String, default: 'user'},
  content: {type: String, required: true},
  published_at: {type: Date, default: Date.now},
  modified_at: {type: Date, default: Date.now},
  finished: {type: Boolean, default: false},
})

module.exports = mongoose.model('Task', TaskSchema)