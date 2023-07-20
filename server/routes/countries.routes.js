const express = require('express');
const countries_router = express.Router();
const countriesModelController = require("../controllers/countries.controllers")

countries_router.get('/',countriesModelController.getAll);

countries_router.get('/:id', countriesModelController.getOne);

countries_router.delete('/:id',countriesModelController.delete);

countries_router.post('/',countriesModelController.post);

countries_router.put('/:id',countriesModelController.edit);


module.exports = countries_router;