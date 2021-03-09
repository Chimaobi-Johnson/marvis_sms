const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require('passport');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const cloudinary = require('cloudinary').v2;

const cookieSession = require('cookie-session');

const path = require('path');

const app = express();

// app.use(cors());

const keys = require("./config/keys");

// app models
// require('./models/User');
require('./services/passport');

// app routes
// const authRoutes = require('./routes/authRoutes');


const storage = multer.diskStorage({
  destination: null,
  filename: function(req, file, cb) {
      cb(null, uuidv4() + file.originalname)
  }
});

const fileFilter = (req, file, cb) => {
if(file.mimetype === 'image/png' ||
   file.mimetype === 'image/jpg' ||
   file.mimetype === 'image/jpeg'
   ) {
  cb(null, true);
} else {
  cb(null, false);
}
};

app.use(cookieSession({
  maxAge: 30 * 24 * 60 * 60 * 1000,
  keys: [keys.cookieKey]
}))

// app.use(passport.initialize())
// app.use(passport.session())

// app.use(express.static(path.join(__dirname, 'client/build')))

app.use(multer({storage: storage, fileFilter: fileFilter}).single('image'))


app.use('/images', express.static(path.join(__dirname, 'images')));

app.use(bodyParser.json()); // to parse incoming json data
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.get('/', (req, res) => {
    res.send('Welcome to Marvis Student Management System API. Have fun!!!')
})

// app.use(authRoutes);
// mongodb:
// image : mongo
// environment: 
//   MONGO_INITDB_ROOT_USERNAME: root
//   MONGO_INITDB_ROOT_PASSWORD: rootpassword
// ports:
//   - 27017:27017
app.use((error, req, res, next) => {
  console.log(error);
  res
    .status(error.httpStatusCode)
    .json({ message: "An error occured, please try again" });
});

mongoose
  .connect(keys.mongoURI)
  .then((connect) => {
    console.log("Database Connected!");
  })
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT);
