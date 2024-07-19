const { cars } = require('../../api/db')
const {getCarsByBrand} = require('../controllers/carsControllers')

const getCars = async (req, res) => {

    const brand = req.query.brand;
    console.log(brand);
    if(brand){
        const carByBrand = await getCarsByBrand(brand);
        if(carByBrand && carByBrand.length > 0){
            return res.status(200).json(carByBrand);
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

    try {
        if(carInfo.name){
            carsList.push(carInfo)
            res.status(200).json('Your car has been published successfuly!')
        }
        res.status(400).json('It seems that you have uncompleted parameters!')
    } catch (err) {
        res.send('An error occured :(')
        console.log(err);
    }
}

module.exports = {
    getCars,
    getCarById,
    uploadCars
}