const { cars } = require('../../api/db')
const {getCarsByBrand, getCarsByModel} = require('../controllers/carsControllers')

const getCars = async (req, res) => {
    const brand = req.query.brand;
    const model = req.query.model;

    if(brand){
        const carByBrand = await getCarsByBrand(brand);
        if(carByBrand && carByBrand.length > 0){
            return res.status(200).json(carByBrand);
        } else {
            return res.status(404).json({message: 'Brand not found'})
        }
    }

    if(model){
        const carByModel = await getCarsByModel(model);
        if(carByModel && carByModel.length > 0){
            return res.status(200).json(carByModel);
        } else {
            return res.status(404).json({message: 'Model not found'})
        }
    }

    const response = cars;
    res.status(200).json(response);
}   

const getCarById = async (req, res) => {
    const {id} = req.params
    const car = cars.find(car => car.id === parseInt(id, 10));
    if (car) {
        res.status(200).json(car);
    } else {
        res.status(404).json({ message: 'Car not found' });
    }
}

const uploadCars = async (req, res) => {
    const carInfo = req.body;
    console.log(carInfo);
    try {
        if (carInfo.brand) {
            cars.push(carInfo);
            return res.status(200).json('Your car has been published successfully!');
        } else {
            return res.status(400).json('It seems that you have incomplete parameters!');
        }
    } catch (err) {
        console.log(err);
        res.status(500).send('An error occurred :(');
    }
};

module.exports = {
    getCars,
    getCarById,
    uploadCars
}