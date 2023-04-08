const { Schema, model, SchemaType } = require('mongoose');

const recordSchema = new Schema(
  {
    userID: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        default: null,
    },

    clientID: {
      type: Schema.Types.ObjectId,
      ref: 'Client',
      default: null,
    },

    flags:{
        type:Number,
        enum:[1,2,3,4],
        // 4 - green
        // 3 - yellow
        // 2 - orange
        // 1 - red   
    },

    comments:{
      type:String
    },

    startDate:{
      type:String
    },

    endDate:{
      type:String
    },

    role:{
      type:String
    },

  },
  { timestamps: true }
);

module.exports = model('Record', recordSchema);
