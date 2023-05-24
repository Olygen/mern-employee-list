const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const employeeSchema = require('./employeeSchema');

const lineEmployeeSchema = new Schema({
  qty: { type: Number, default: 1 },
  employee: employeeSchema
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});

lineEmployeeSchema.virtual('extPrice').get(function() {
  // 'this' is bound to the lineEmployee subdoc
  return this.qty * this.employee.price;
});

const teamSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  lineEmployees: [lineEmployeeSchema],
  isPaid: { type: Boolean, default: false }
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});

teamSchema.virtual('teamTotal').get(function() {
  return this.lineEmployees.reduce((total, employee) => total + employee.extPrice, 0);
});

teamSchema.virtual('totalQty').get(function() {
  return this.lineEmployees.reduce((total, employee) => total + employee.qty, 0);
});

teamSchema.virtual('teamId').get(function() {
  return this.id.slice(-6).toUpperCase();
});

teamSchema.statics.getGroup = function(userId) {
  // 'this' is the Team model
  return this.findOneAndUpdate(
    // query
    { user: userId, isPaid: false },
    // update
    { user: userId },
    // upsert option will create the doc if
    // it doesn't exist
    { upsert: true, new: true }
  );
};

teamSchema.methods.addEmployeeToGroup = async function(employeeId) {
  const group = this;
  // Check if employee already in group
  const lineEmployee = group.lineEmployees.find(lineEmployee => lineEmployee.employee._id.equals(employeeId));
  if (lineEmployee) {
    lineEmployee.qty += 1;
  } else {
    const employee = await mongoose.model('Employee').findById(employeeId);
    group.lineEmployees.push({ employee });
  }
  return group.save();
};

// Instance method to set an employee's qty in the group (will add employee if does not exist)
teamSchema.methods.setEmployeeQty = function(employeeId, newQty) {
  // this keyword is bound to the group (team doc)
  const group = this;
  // Find the line employee in the group for the menu employee
  const lineEmployee = group.lineEmployees.find(lineEmployee => lineEmployee.employee._id.equals(employeeId));
  if (lineEmployee && newQty <= 0) {
    // Calling deleteOne, removes itself from the group.lineEmployees array
    lineEmployee.deleteOne();
  } else if (lineEmployee) {
    // Set the new qty - positive value is assured thanks to prev if
    lineEmployee.qty = newQty;
  }
  // return the save() method's promise
  return group.save();
};

module.exports = mongoose.model('Team', teamSchema);
