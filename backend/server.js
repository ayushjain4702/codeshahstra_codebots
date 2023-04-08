require('dotenv').config({
  path: './.env',
});

const express = require('express');
const app = express();
const ConnectDB = require('./config/ConnectDB');
const error_handler = require('./lib/handlers/error.handler');
const _Error = require('./lib/utils/_error');

//packages
const morgan = require('morgan');
const multer = require('multer');
const cors = require('cors');

//middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json({ extended: false }));
console.log(Date.now()+3);
const Main = async () => {
  try {
    await ConnectDB();
    app.listen(5000, () => {
      console.log('Server started on port 5000');
    });
  } catch (error) {
    console.log(error);
  }
};

Main();

//Multer
// const multerMid = multer({
//     storage: multer.memoryStorage(),
//     limits: {
//       fileSize: 10 * 1024 * 1024,
//     },
//   });

// app.use(multerMid.single("file"));
// app.use(multerMid.array("files",5));

app.get('/', (req, res) => {
  res.send('Server for Code Bots');
});

// Api

app.use('/api/v1', require('./routes'));
// app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/hello', (req, res) =>
  res.send({
    message: 'HI',
  })
);

app.use(error_handler);

//* Error handling middleware
app.all('*', async (req, res, next) => {
  console.log('here');
  // await errorSaver(req, 'client');
  res.send('Route not found 404');
  // next(new _Error(`Can't find ${req.path} :(`, 404));
});

module.exports = app;
