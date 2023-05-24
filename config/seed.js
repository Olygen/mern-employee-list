require('dotenv').config();
require('./database');

const Department = require('../models/Department');
const Employee = require('../models/Employee');

(async function() {

  await Department.deleteMany({});
  const departments = await Department.create([
    {name: 'Business Develpoment', sortOrder: 10},
    {name: 'Finance/accounting', sortOrder: 20},
    {name: 'Sales and Marketing', sortOrder: 30},
    {name: 'QA Testers', sortOrder: 40},
    {name: 'Designers', sortOrder: 50},
    {name: 'Engineering', sortOrder: 60},
    {name: 'Developers', sortOrder: 70},
  ]);

  await Employee.deleteMany({});
  const employees = await Employee.create([
    {name: 'Julie Taylor', position: 'Project manager', photo: 'https://i.imgur.com/3HnDU6t.jpg', department: departments[0], price: 50},
    {name: 'Noah Smith', position: 'Product manager', photo: 'https://i.imgur.com/BdPbBuj.png', department: departments[0], price: 45},
    {name: 'Harper Johnson', position: 'Vendor manager', photo: 'https://i.imgur.com/MJ5vtOx.png', department: departments[0], price: 45},
    {name: 'Logan Williams', position: 'Senior accountant', photo: 'https://i.imgur.com/RwZiKdc.png', department: departments[1], price: 40},
    {name: 'Brooklyn Walker', position: 'Accountant', photo: 'https://i.imgur.com/hDufBGT.png', department: departments[1], price: 35},
    {name: 'Avery Lee', position: 'HR', photo: 'https://i.imgur.com/s7fG8eT.png', department: departments[1], price: 35},
    {name: 'Madison Lewis', position: 'Planner', photo: 'https://i.imgur.com/lKny5of.png', department: departments[2], price: 40},
    {name: 'Riley Rodriguez', position: 'Analyst', photo: 'https://i.imgur.com/lP88rMR.png', department: departments[2], price: 35},
    {name: 'Jayden Clark', position: 'Automation II', photo: 'https://i.imgur.com/Y55By1j.png', department: departments[3], price: 35},
    {name: 'Arden Robinson', position: 'Automation I', photo: 'https://i.imgur.com/NGxj9KQ.png', department: departments[3], price: 30},
    {name: 'Dakota Thompson', position: 'Manual I', photo: 'https://i.imgur.com/JNhzsSw.png', department: departments[3], price: 25},
    {name: 'Finley Garcia', position: 'Web designer', photo: 'https://i.imgur.com/NmwNI8y.png', department: departments[4], price: 40},
    {name: 'Hayden Martin', position: 'UX designer', photo: 'https://i.imgur.com/D2fkmJa.png', department: departments[4], price: 40},
    {name: 'Lennox Patel', position: 'Cyber cecurity', photo: 'https://i.imgur.com/HbBzsuX.png', department: departments[5], price: 50},
    {name: 'Lindsey Sharma', position: 'iOS', photo: 'https://i.imgur.com/Mpu4IZa.png', department: departments[5], price: 40},
    {name: 'Robin Gupta', position: 'Android', photo: 'https://i.imgur.com/0KhxaRI.png', department: departments[5], price: 40},
    {name: 'Rowan Shortcake', position: 'Data scientist', photo: 'https://i.imgur.com/1xKzMLO.png', department: departments[5], price: 45},
    {name: 'Sloan Desai', position: 'Back End', photo: 'https://i.imgur.com/omTteql.png', department: departments[6], price: 45},
    {name: 'Adair Malhotra', position: 'Back End', photo: 'https://i.imgur.com/3gOjxPV.png', department: departments[6], price: 45},
    {name: 'Chandler Chen', position: 'Front End', photo: 'https://i.imgur.com/OCVvFKQ.png', department: departments[6], price: 45},
    {name: 'Sinclair Zhao', position: 'Front End', photo: 'https://i.imgur.com/3D2yBD0.png', department: departments[6], price: 50},
    {name: 'Cheyenne Zhou', position: 'Cloud', photo: 'https://i.imgur.com/1Fysdg1.png', department: departments[6], price: 50},
  ]);

  console.log(employees)

  process.exit();

})();
