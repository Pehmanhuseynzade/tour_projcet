const express = require('express');
const use_router = express.Router();
const useModelController = require("../controllers/usefulinfo.controller")

use_router.get('/',useModelController.getAll);

use_router.get('/:id', useModelController.getOne);

use_router.delete('/:id',useModelController.delete);

use_router.post('/',useModelController.post);

use_router.put('/:id',useModelController.edit);


module.exports = use_router;