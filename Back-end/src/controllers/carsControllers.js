const {cars} = require('../../api/db.json');

const getCarsByBrand = async (brand) => {
    const filteredCars = cars.filter(car => car.brand.toLowerCase() === brand.toLowerCase());
    return filteredCars
}

const getCarsByModel = async (model) => {
    const filteredCars = cars.filter(car => car.model.toLowerCase() === model.toLowerCase());
    return filteredCars
}

module.exports = {getCarsByBrand, getCarsByModel};