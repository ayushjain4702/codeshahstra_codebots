const express = require('express');
const { addEmployee,removeEmployee,updateRecord } = require('../controllers/recordController');
const { protect } = require('../controllers/authentiController');

const router = express.Router();

router.use(protect);
router.route("/addEmployee",addEmployee);
router.post("/removeEmployee",removeEmployee);
router.put("/updateRecord",updateRecord);

module.exports = router