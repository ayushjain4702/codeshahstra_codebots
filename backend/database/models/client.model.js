const { model } = require('mongoose');
const  {Client}  = require('../schemas/client.schema.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
userSchema = Client;

userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign({ _id: user._id.toString() }, process.env.SECRET_KEY, {
    expiresIn: process.env.TOKEN_EXPIRE,
  });

  return token;
};
// login using hash
userSchema.statics.findByCredentials = async (email, password) => {
  const user = await Client.find({ email });

  if (!user) {
    throw new Error('Unable to login u');
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error('Unable to login');
  }

  return user;
};

// hashing the plain text password
userSchema.pre('save', async function (next) {
  const user = this;
  // console.log(user);
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

const client = model('Client', userSchema);

module.exports = client;
