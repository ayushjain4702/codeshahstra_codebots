const express = require('express');

const clientRouter = require('./clientRoute');
const userRouter=require('./userRoute')
const recordRoute=require('./recordRoute')

const router = express.Router();

router.use('/client', clientRouter);
router.use('/user',userRouter);
router.use('/record',recordRoute);

module.exports = router;
