const jwt = require('jsonwebtoken');

const jwt_token = () =>
  jwt.sign({ _id: this.user._id.toString() }, process.env.SECRET_KEY, {
    expiresIn: '3d',
  });

// userSchema.methods.generateAuthToken = async function () {
//   const user = this;
//   const token = jwt.sign({ _id: user._id.toString() }, process.env.SECRET_KEY, {
//     expiresIn: '3d',
//   });
//   // await user.save();

//   // return token;
// };

module.exports = jwt_token;
