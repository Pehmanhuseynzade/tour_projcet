const express = require('express');
const payment_router = express.Router();
const paymentModelController = require("../controllers/payment.controller")

payment_router.get('/',paymentModelController.getAll);

// payment_router.get('/:id', paymentModelController.getOne);

payment_router.delete('/:id',paymentModelController.delete);

payment_router.post('/',paymentModelController.post);



module.exports = payment_router;