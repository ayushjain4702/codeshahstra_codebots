const { Schema } = require('mongoose');
const {
  validEmail,
  validPhoneNumber,
  validPhotoURL,
} = require('../../lib/utils/validators');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const clientSchema = new Schema(
  {
    clientName: {
      type: String,
    },

    email: {
      type: String,
      required: true,
      // validate(value) {
      //   validEmail(value);
      // },
      // unique: [true, 'Email already Taken'],
    },

    password: {
      type: String,
      required: true,
      // trim: true,
      // minlength: 7,
    },

    // gstNumber: String,

    address: String,
    // apikey: String,
    photo:String,

    employees:[{
      type: Schema.Types.ObjectId,
      ref: 'User',
      default: null,
    }]
    
  },
  { timestamps: true }
);

module.exports.Client = clientSchema;
