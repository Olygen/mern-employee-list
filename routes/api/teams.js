const express = require('express');
const router = express.Router();
const teamsCtrl = require('../../controllers/api/teams');

// GET /api/teams/group
router.get('/group', teamsCtrl.group);
// GET /api/teams/history
router.get('/history', teamsCtrl.history);
// POST /api/teams/group/employees/:id
router.post('/group/employees/:id', teamsCtrl.addToGroup);
// POST /api/teams/group/enough
router.post('/group/enough', teamsCtrl.enough);
// POST /api/teams/group/qty
router.put('/group/qty', teamsCtrl.setEmployeeQtyInGroup);

module.exports = router;
