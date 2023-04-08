const express = require('express');
const { protect, admin } = require('../controllers/authentiController');
const { create,readById,update,login } = require('../controllers/clientController');

const router = express.Router();

// router.use(verify);
router.route('/').post(create); // api/v1/operator
router.route('/login').post(login)
router.use(protect);
router.route('/mydetails').get(readById)
router.route('/update').put(update);
// router.route('/:id').delete(remove).get(readById); // api/v1/operator/634635687367

module.exports = router;
