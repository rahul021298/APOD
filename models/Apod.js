const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const apodSchema = new Schema({
  copyright: {
    type: String,
    required: false,
  },
  service_version: {
    type: String,
    required: false,
  },
  date: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: false,
  },
  url: {
    type: String,
    required: true,
  },
  hdurl: {
    type: String,
    required: false,
  },
  explanation: {
    type: String,
    required: false,
  },
  media_type: {
    type: String,
    required: true,
  },
});

const Apod = mongoose.model("Apod", apodSchema);

module.exports = Apod;
