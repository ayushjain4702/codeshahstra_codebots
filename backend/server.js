require("dotenv").config({
  path: "./.env",
});
const formidable = require("formidable");
const fs =require("fs")

const express = require("express");
const app = express();
const ConnectDB = require("./config/ConnectDB");
const error_handler = require("./lib/handlers/error.handler");
const _Error = require("./lib/utils/_error");

//packages
const morgan = require("morgan");
const multer = require("multer");
const cors = require("cors");
const { createUser } = require("./controllers/userController");
const User = require("./database/schemas/user.schema");

//middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json({ extended: false }));
console.log(Date.now() + 3);
const Main = async () => {
  try {
    await ConnectDB();
    app.listen(5001, () => {
      console.log("Server started on port 5001");
    });
  } catch (error) {
    console.log(error);
  }
};

Main();

//Multer
// const multerMid = multer({
//     storage: multer.memoryStorage(),
//     // limits: {
//     //   fileSize: 10 * 1024 * 1024,
//     // },
//   });

// const filestorage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./Images");
//   },
//   filename: function (req, file, cb) {
//     // cb(null, Date.now() + "--" + file.originalname);
//     return cb(null, Date.now() + "--" + file.originalname)
//   },
// });
// const upload = multer({ storage: filestorage });
// app.use(upload.single("file"));
// app.use(upload.array("files", 5));

// app.use(multerMid.single("file"));
// app.use(multerMid.array("files", 5));

app.get("/", (req, res) => {
  res.send("Server for Code Bots");
});

// Api

app.use("/api/v1", require("./routes"));

app.post("/createUser",async (req,res)=>{
  let user = await createUser(req.body)
  return res.status(200).json({
    success:true,
    data:user
  })
})

app.get("/getUser/:id",async(req,res)=>{
  const id = req.params.id;
  const user = await User.findById(id)

  return res.status(200).json({
    success:true,
    data:user
  })
})

app.put("/updateUser",async (req,res)=>{
  await User.updateOne({_id:req.body.id},{
    photo:req.body.photo
  })
  return res.status(200).json({
    success:true,
    data:"Updated"
  })
})
// app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// app.post("/imageUpload",async (req,res)=>{
  
//     // console.log(require("./Images/"+req.body.imagePath))

//   const { data } = await axios.post("http://localhost:5000/query",req.file)

//   const resp = JSON.parse(data)

//   let user;
//   if(resp['score']<0.7){
//       user = await createUser(req.body)
//   }
//   else{
//       return res.status(200).json({
//           success:true,
//           data:data
//       })
//   }

//   const formdata = new FormData();
//   formdata.append("image",req.file);
//   formdata.append("id",user._id);

//   const { addData } = await axios.post("http://localhost:5000/add",formdata)

//   console.log(addData)

//   return res.status(200).json({
//       success:true,
//       data:"No record"
//   })

// })

app.use("/hello", (req, res) =>
  res.send({
    message: "HI",
  })
);

app.use(error_handler);

//* Error handling middleware
app.all("*", async (req, res, next) => {
  console.log("here");
  // await errorSaver(req, 'client');
  res.send("Route not found 404");
  // next(new _Error(`Can't find ${req.path} :(`, 404));
});

module.exports.app = app
// module.exports.upload = upload;
