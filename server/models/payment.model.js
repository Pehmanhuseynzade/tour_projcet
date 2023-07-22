const mongoose = require('mongoose')

const paymentSchema = new mongoose.Schema({
    paymenttourName: String,
    paymenttourPrice: Number,
    paymenttourDesc: String,
    paymenttourImage:String
});

const paymentModel = mongoose.model('Payment', paymentSchema);


module.exports = paymentModel