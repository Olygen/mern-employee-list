// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/User');
// const Employee = require('./models/employee');
// const Department = require('./models/department');
// const Team = require('./models/team');

// Local variables will come in handy for holding retrieved documents
let user, employee, department, team;
let users, employees, departments, teams;