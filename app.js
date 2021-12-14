require("dotenv/config");
const path = require('path');
const apodRoutes = require('./routes/apodRoute');
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const { cwd } = require("process");
const port = 3000;
const app = express();

app.use(cors());
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

app.use("/planetary", apodRoutes);
mongoose.connect(process.env.DB_Connect, { useNewUrlParser: true }, () =>
  console.info("Connected to Mongo Db")
);
app.use(express.static('APOD'));
app.use('/images', express.static(__dirname+"/images"))
app.use(express.static(path.join(__dirname,'./js')));
app.use(express.static(path.join(__dirname,'./public')));
app.use(express.static(path.join(__dirname,'./images')));
app.get('/', function(req,res){
  var pathName = path.join(__dirname,'./public/index.html');
  res.sendFile(pathName);
});
app.listen(process.env.PORT || port, () => console.info("server running: "+cwd()));
