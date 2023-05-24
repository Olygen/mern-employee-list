const Team = require('../../models/Team');
// const Employee = require('../../models/employee');

module.exports = {
  group,
  addToGroup,
  setEmployeeQtyInGroup,
  enough,
  history
};

// A group is the unpaid team for a user
async function group(req, res) {
  try{
    const group = await Team.getGroup(req.user._id);
    res.status(200).json(group);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }
}

// Add an employee to the group
async function addToGroup(req, res) {
  try{
    const group = await Team.getGroup(req.user._id);
    await group.addEmployeeToGroup(req.params.id);
    res.status(200).json(group);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }  
}

// Updates an employee's qty in the group
async function setEmployeeQtyInGroup(req, res) {
  try{
    const group = await Team.getGroup(req.user._id);
    await group.setEmployeeQty(req.body.employeeId, req.body.newQty);
    res.status(200).json(group);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }
}

// Update the group's isPaid property to true
async function enough(req, res) {
  try{
    const group = await Team.getGroup(req.user._id);
    group.isPaid = true;
    await group.save();
    res.status(200).json(group);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }  
}

// Return the logged in user's paid team history
async function history(req, res) {
  // Sort most recent teams first
  try{
    const teams = await Team
      .find({ user: req.user._id, isPaid: true })
      .sort('-updatedAt').exec();
    res.status(200).json(teams);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }

}
