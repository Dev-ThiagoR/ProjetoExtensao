const mongoose = require('mongoose');
const ModuleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  order: { type: Number, required: true, unique: true },
  icon: { type: String, required: false } // Campo para o nome do ícone
});
module.exports = mongoose.model('Module', ModuleSchema);