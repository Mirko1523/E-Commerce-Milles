const { Router } = require('express');
const carsRouter = Router();

const {getCars, uploadCars, getCarById} = require('../handlers/carsHandlers')

carsRouter.get('/', getCars);
carsRouter.get('/:id', getCarById);
carsRouter.post('/', uploadCars);

module.exports = carsRouter;