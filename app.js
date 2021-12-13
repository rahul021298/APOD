require("dotenv/config");
const path = require('path');
const apodRoutes = require('./routes/apodRoute');
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const { cwd } = require("process");
const app = express();
const port = 3000;
const adopController = require("./controller/apodController")
app.use(cors());

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
app.listen(process.env.PORT || port, () => console.log("server running: "+cwd()));
