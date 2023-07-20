const mongoose = require('mongoose')

const poptoursSchema = new mongoose.Schema({
    poptoursimg: String,
    poptoursname: String,
    poptoursprice: Number,
    poptoursday:Number,
    poptoursdesc: String,
    poptoursdate: String,
});

const poptoursModel = mongoose.model('poptours', poptoursSchema);


module.exports = poptoursModel