const mongoose = require('mongoose');
const LessonSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  module: { type: mongoose.Schema.Types.ObjectId, ref: 'Module' },
  order: { type: Number, required: true }
});
module.exports = mongoose.model('Lesson', LessonSchema);