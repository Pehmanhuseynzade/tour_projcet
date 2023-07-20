const express = require('express');
const poptour_router = express.Router();
const poptourModelController = require("../controllers/poptour.controllers")

poptour_router.get('/',poptourModelController.getAll);

poptour_router.get('/:id', poptourModelController.getOne);

poptour_router.delete('/:id',poptourModelController.delete);

poptour_router.post('/',poptourModelController.post);

poptour_router.put('/:id',poptourModelController.edit);


module.exports = poptour_router;