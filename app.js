require("dotenv/config");
const apodRoutes = require('./routes/apodRoute');
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const app = express();
const port = 3000;

mongoose.connect(process.env.DB_Connect, { useNewUrlParser: true }, () =>
  console.info("Connected to Mongo Db")
);
app.use(express.static('APOD'));
app.use(cors());
app.use("/planetary", apodRoutes);

app.listen(process.env.PORT || port, () => console.log("server running"));