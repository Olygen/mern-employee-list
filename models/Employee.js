const mongoose = require('mongoose');
// Ensure the Department model is processed by Mongoose
require('./Department');

const employeeSchema = require('./employeeSchema');

module.exports = mongoose.model('Employee', employeeSchema);
