const jwt = require('jsonwebtoken');
// const catcher = require('../../lib/utils/catcher');
const Client = require('../database/models/client.model.js');

module.exports.protect = async (req, res, next) => {
  try {
    const key = req.header('Authorization').replace('Bearer ', '');
    // console.log(key);

    const decoded = jwt.verify(key, process.env.SECRET_KEY);
    const client = await Client.findOne({
      _id: decoded._id,
    });

    if (!client) {
      throw new Error('plz authenticate yourself!');
    }
    req.client = client;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).send({ error: 'plz authenticate' });
  }
};

// module.exports.admin = (req, res, next) => {
//   if (req.client && req.client.isAdmin) {
//     next();
//   } else {
//     res.status(401);
//     throw new Error('You dont have required permissions');
//   }
// };
