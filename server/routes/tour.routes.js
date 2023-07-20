const express = require('express');
const traveltour_router = express.Router();
const tourModelController = require("../controllers/tour.controllers")

traveltour_router.get('/',tourModelController.getAll);

traveltour_router.get('/:id', tourModelController.getOne);

traveltour_router.delete('/:id',tourModelController.delete);

traveltour_router.post('/',tourModelController.post);

traveltour_router.put('/:id',tourModelController.edit);


module.exports = traveltour_router;