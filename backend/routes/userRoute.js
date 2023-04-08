const express = require('express');
const { protect, admin } = require('../controllers/authentiController');
const { create, getUsers } = require('../controllers/userController');

const router = express.Router();

// router.use(verify);
router.route('/').post(create); // api/v1/operator
router.route('/').get(getUsers); // api/v1/operator

module.exports = router;
