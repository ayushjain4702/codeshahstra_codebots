const catcher = require('../lib/utils/catcher');
const User = require('../database/schemas/user.schema');

module.exports.create = catcher(async (req, res, next) => {
  console.log()

  const user = await User.create({
    ...req.body,
  });

  await user.save();

  return res.status(201).json({
    success: true,
    message: 'new User added successfully',
    user,
  });
});

module.exports.createUser = async(data)=>{
  const user = new User({...data})
  await user.save();
  return user
}

module.exports.getUsers = catcher(async (req,res)=>{
  const users = await User.find();
  return res.status(200).json({
    success:true,
    data:users
  })
})

