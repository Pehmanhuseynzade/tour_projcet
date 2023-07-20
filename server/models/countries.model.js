const mongoose = require('mongoose')

const countriesSchema = new mongoose.Schema({
  countriesname: String,
  countriesimg: String
});

const countriesModel = mongoose.model('countries', countriesSchema);


module.exports = countriesModel