const catcher = require('../lib/utils/catcher');
const Client = require('../database/models/client.model');
const _Error = require('../lib/utils/_error');

module.exports.whoami = catcher(async (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '');
  const decoded = jwt.verify(token, process.env.SECRET_KEY);
  const user = await Client.findOne({
    _id: decoded._id,
  });

  if (!user) {
    throw new Error('plz authenticate yourself!');
  }
  res.status(200).json({
    status: 'success',
    data: user,
    message: 'Client registered successfully',
  });
});

// module.exports.verify = catcher(async (req, res, next) => {
//   const { authorization } = req.headers || '';

//   if (!authorization) {
//     return next(new _Error('Please login to continue.', 401));
//   }

//   const identity = await admin.auth().verifyIdToken(authorization);

//   if (!identity) return next(new _Error('Please login to continue.', 401));

//   const client = await Client.findOne({
//     $or: [
//       {
//         email: identity.email,
//       },
//       {
//         phone: identity.phoneNumber,
//       },
//     ],
//   });

//   if (!client) return next(new _Error('Please try to register again', 404));

//   req.ctx = client;
//   req.identity = identity;

//   next();
// });

// module.exports.dummy_verify = catcher(async (req, res, next) => {
//   req.ctx = {
//     _id: 'test',
//   };

//   next();
// });

// module.exports.verifyToken = catcher(async (req, res, next) => {
//   const { authorization } = req.headers || '';

//   if (!authorization) {
//     return next(new _Error('Please login to continue.', 401));
//   }

//   const identity = await admin.auth().verifyIdToken(authorization);

//   req.identity = identity;

//   next();
// });
