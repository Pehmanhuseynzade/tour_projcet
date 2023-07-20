const mongoose = require('mongoose')

const toursSchema = new mongoose.Schema({
    toursimg: String,
    toursname: String,
    toursprice: Number,
    toursday:Number,
    toursdesc: String,
    toursdate: String,
});

const toursModel = mongoose.model('traveltour', toursSchema);


module.exports = toursModel