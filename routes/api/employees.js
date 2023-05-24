const express = require('express');
const router = express.Router();
const employeesCtrl = require('../../controllers/api/employees');

// GET /api/employees
router.get('/', employeesCtrl.index);
// GET /api/employees/:id
router.get('/:id', employeesCtrl.show);

module.exports = router;
