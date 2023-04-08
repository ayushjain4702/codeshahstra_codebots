const express = require('express');
const { protect } = require('../controllers/authentiController');
const { byFace } = require('../controllers/queryController');

const router = express.Router();

router.post("/byFace",byFace)

module.exports = router