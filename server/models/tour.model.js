const mongoose = require('mongoose')

const toursSchema = new mongoose.Schema({
    toursimg: String,
    toursname: String,
    toursprice: Number,
    toursdesc: String,
    toursdate: String,
});

const toursModel = mongoose.model('tours', toursSchema);


module.exports = toursModel