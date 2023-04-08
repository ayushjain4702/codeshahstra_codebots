const mongoose = require("mongoose");
// require("dotenv").config();
let connectionString=""

const connectDB = async () => {
  try {
    connectionString=process.env.DATABASE
    // console.log(connectionString)
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    console.log("MongoDB connected...");
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;