const Schema = require('mongoose').Schema;

const employeeSchema = new Schema(
{
  name: { type: String, required: true },
  position: { type: String},
  photo: String,
  department: { type: Schema.Types.ObjectId, ref: 'Department' },
  price: { type: Number, required: true, default: 0 }
}, {
  timestamps: true
});

module.exports = employeeSchema;
