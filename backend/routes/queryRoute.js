const express = require("express");
const { protect } = require("../controllers/authentiController");
const { byFace } = require("../controllers/queryController");
// const { upload } = require("../server");
const multer = require("multer");

const router = express.Router();
console.log("query");
router.post("/byFace", byFace);

module.exports = router;
