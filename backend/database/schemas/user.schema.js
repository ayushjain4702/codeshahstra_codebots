const { Schema, model, SchemaType } = require('mongoose');

const userSchema = new Schema(
  {
    userID: String,

    records:[{
      type: Schema.Types.ObjectId,
      ref: 'Record',
      default: null,
    }],

    photo:String,

    phoneno:Number,
    name:String,
    dob:String,
    email:String,
  },
  { timestamps: true }
);

module.exports = model('User', userSchema);
