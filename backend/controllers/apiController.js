const catcher = require('../lib/utils/catcher');
const Api = require('../database/schemas/api.schema');
const couponCodeGen = require('../lib/functions/keyGenrator');
const Client=require("../database/models/client.model")

const apiCreator = async (clientID, token) => {
  let apikey = couponCodeGen('alphanumeric', 25);
  const api = await Api.create({
    clientID,
    apikey,
    token,
  });

  await api.save();
  return apikey;
};

module.exports.update = catcher(async (req, res, next) => {
  const apikey = await apiCreator(client._id, token);
  const updateData = {
    apikey,
  };
  const client=await Client.find({
    _id:req.client._id
  })

  if(!client){
    return res.status(400).json({
      message:"Client could not be find"
    })
  }
  const found = await Client.updateOne(
    client,
    { $set: updateData },
    { omitUndefined: 1 }
  );
    const api=await Api.find({
      clientID:req.client._id
    })
  const updateApi=await Api.updateOne(
    api,
    { $set: updateData },
    { omitUndefined: 1 }
  )

  return res.status(200).json({
    success: true,
    message: 'new Api key generated successfully',
    data:{client,updateApi},
  });
});

module.exports = apiCreator;
