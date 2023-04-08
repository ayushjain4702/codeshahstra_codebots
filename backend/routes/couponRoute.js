const express = require('express');
const { protect } = require('../controllers/authentiController');
const { create } = require('../controllers/clientController');
const { createCoupon, getAllCoupon, validateCoupon, useCoupon } = require('../controllers/couponController');

const router = express.Router();

// router.use(verify);
router.use(protect);
router.get("/getCoupons",getAllCoupon); // api/v1/operator
router.post("/createCoupon",createCoupon); // api/v1/operator
router.post("/useCoupon",useCoupon); // api/v1/operator
router.post("/validateCoupon",validateCoupon); // api/v1/operator

// router.route('/:id').delete(remove).get(readById); // api/v1/operator/634635687367

module.exports = router;
