const Employee = require('../../models/Employee');

module.exports = {
  index,
  show
};

async function index(req, res) {
  try{
    const employees = await Employee.find({})
    .sort('name')
    .populate('department')
    .exec();
    // re-sort based upon the sortOrder of the departments
    employees.sort((a, b) => a.department.sortOrder - b.department.sortOrder);
    res.status(200).json(employees);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }
}

async function show(req, res) {
  try{
    const employee = await Employee.findById(req.params.id);
    res.status(200).json(employee);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }  
}
