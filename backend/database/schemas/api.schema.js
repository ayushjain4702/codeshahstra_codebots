const { Schema, model } = require('mongoose');

const apiSchema = new Schema(
  {
    apikey: String,
    clientID: {
      type: Schema.Types.ObjectId,
      ref: 'Client',
      default: null,
    },
    token: String,
  },
  { timestamps: true }
);

const Api = model('Api', apiSchema);
module.exports = Api;
