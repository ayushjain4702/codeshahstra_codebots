const catcher = require('../lib/utils/catcher');
const Client  = require('../database/models/client.model');
const User = require('../database/schemas/user.schema');
const _Error = require('../lib/utils/_error');
const apiCreator = require('./apiController');
const bcrypt=require("bcryptjs");
const { createUser } = require('./userController');
const Record = require('../database/schemas/records.schema');

const findByCredentials1 = async (email, password) => {
  const user = await Client.find({ email });
  console.log(user);
  if (!user) {
    throw new Error('Unable to login u');
  }
  const isMatch = await bcrypt.compare(password, user[0].password);
  if(isMatch){
    return user;
  }
  return "No user found"
}

module.exports.create = catcher(async (req, res, next) => {
  const { clientName, email, password, address } = req.body;
  const client = await Client.create({
    clientName,
    email,
    password,
    address,
  });
  await client.save();
  const token = await client.generateAuthToken();
  // const apikey = await apiCreator(client._id, token);
  // const updateData = {
  //   apikey,
  // };

  // const found = await Client.updateOne(
  //   client,
  //   { $set: updateData },
  //   { omitUndefined: 1 }
  // );


  return res.status(201).json({
    success: true,
    message: 'new Client added successfully',
    data:{client,token},
  });
});


module.exports.readById = catcher(async (req, res, next) => {
  const client = await Client.findOne({
    _id: req.client._id,
  });

  if (!client) {
    return   res.status(400).json({
      status: 'failure',
      data: client,
      message: `Client not found`,
    });;
  }

  res.status(200).json({
    status: 'success',
    data: client,
    message: `Client ${client.clientName} details`,
  });
});


module.exports.login = catcher(async (req, res, next) => {
  const{email,password}=req.body
  const client =await findByCredentials1(
    email,
    password
  );
  
  if (client="No user found") {
    res.status(404).json({
      success: false,
      message: 'Client not found',
    });
  }
  const token = await client[0].generateAuthToken();
  res.status(201).json({
    success: true,
    data:client,
    token,
    message: 'Here is your id',
  });
});


module.exports.update = catcher(async (req, res, next) => {
  const client = Client.findById(req.client._id);
  if (!client) {
    res.status(404).json({
      success: false,
      message: 'Client not found',
    });
  }
  const updateData = {
    clientName:req.body.clientName,
    address:req.body.address,
    password: req.body.password
      ? await bcrypt.hash(req.body.password, 8)
      : req.body.password,
  };
  const found = await Client.updateOne(
    client,
    { $set: updateData },
    { omitUndefined: 1 }
  );
  res.status(201).json({
    success: true,
    message: 'Client updated sucessfully',
    data:updateData,
  });
});


module.exports.myUsers = catcher(async (req, res, next) => {
  const users = await User.find({
    clientID: req.client._id,
  });
  res.status(200).json({
    success: true,
    message: 'Heres the list of all your Users',
    data:users,
  });
});


