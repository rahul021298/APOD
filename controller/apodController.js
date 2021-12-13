const request = require('request');
const fs = require('fs');
const Apod = require("../models/Apod");
const axios = require("axios");
const baseURL = "https://api.nasa.gov/planetary/apod";
const api_key = process.env.NASA_API_KEY;


const insertData = async (data) => {
  Apod.create(data);
};

const getData = async (date) => {
    if ( date > new Date().toISOString().slice(0, 10)){
      throw {error: 'Invalid Input Error', message: 'Future dates are not allowed'}
    }
    const dateExist = await Apod.findOne({ date: date });
    if(dateExist){
        return dateExist
    } else{
        const response = await axios.get(`${baseURL}?api_key=${api_key}&date=${date}`);
        return response
    }
};

const downloadImage = async (url, dest) => {

    /* Create an empty file where we can save data */
    const file = fs.createWriteStream(dest);

    /* Using Promises so that we can use the ASYNC AWAIT syntax */
    await new Promise((resolve, reject) => {
      request({
        /* Here you should specify the exact link to the file you are trying to download */
        uri: url,
        gzip: true,
      })
          .pipe(file)
          .on('finish', async () => {
            resolve();
          })
          .on('error', (error) => {
            reject(error);
          });
    })
        .catch((error) => {
          console.log(`Something happened: ${error}`);
        });
};

module.exports = {
  insertData,
  getData,
  downloadImage
};
