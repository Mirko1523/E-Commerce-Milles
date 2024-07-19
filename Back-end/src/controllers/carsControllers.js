const {cars} = require('../../api/db.json');

const getCarsByBrand = async (brand) => {
    const filteredCars = cars.filter(car => car.brand.toLowerCase() === brand.toLowerCase() || car.model.toLowerCase() === brand.toLowerCase());
    return filteredCars
}

module.exports = {getCarsByBrand};