const { createUser } = require('./userController');
const Record = require('../database/schemas/records.schema');
const catcher = require('../lib/utils/catcher');
const Client  = require('../database/models/client.model');
const User = require('../database/schemas/user.schema');
const _Error = require('../lib/utils/_error');

module.exports.addEmployee-catcher(async (req,res)=>{
    const client = await Client.findById(req.client)
    
    let user = await User.findById(req.body.id);
    // work pending here
    if(!user){
      user = await createUser(req.body)
    } 
  
    client.employees.push(user._id)
  
    await client.save();
  
    const record = new Record({
      userID:user._id,
      clientID:client._id,
      startDate: Date.parse(new Date())
    })
  
    await record.save();
  
    return res.status(200).json({
      success:true,
      data:user
    })
  
})
  
module.exports.removeEmployee=catcher(async(req,res)=>{
    const {
      role,
      comments,
      flags,
      userID
    } = req.body
  
    const record = await Record.updateOne({_id:userID},{
      role,
      comments,
      flags,
      endDate:Date.parse(new Date())
    });
  
    const user = await User.findById(userID)
    user.records.push(record._id)
    await user.save();
  
    return res.status(200).json({
      success:true,
      data:"Employee Removed"
    })
})
  
  
module.exports.updateRecord =catcher(async(req,res)=>{

    const record = await Record.updateOne({_id:req.body.userID},req.body);

    return res.status(200).json({
        success:true,
        data:record
    })
})