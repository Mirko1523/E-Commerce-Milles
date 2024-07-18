const express = require('express');
const app = express();
app.use(express.json());

let autos = [
    {
        id : 1,
        brand: 'Ford',
        model: 'Mustang',
        year: 2020,
        price: 'USD 65.000',
        kms: '0km',
        image: 'url.com'
    },
    {
        id : 2,
        brand: 'Honda',
        model: 'Civic',
        year: 2021,
        price: 'USD 30.000',
        kms: '50.000',
        image: 'url.com'
    },
    {
        id : 3,
        brand: 'Toyota',
        model: 'Corolla',
        year: 2022,
        price: 'USD 65.000',
        kms: '0km',
        image: 'url.com'
    },
    {
        id : 4,
        brand: 'Chevrolet',
        model: 'Camaro',
        year: 2021,
        price: 'USD 60.000',
        kms: '0km',
        image: 'url.com'
    },
    {
        id : 5,
        brand: 'Bmw',
        model: 'Serie 3',
        year: 2022,
        price: 'USD 60.000',
        kms: '18.000km',
        image: 'url.com'
    },
    {
        id : 6,
        brand: 'Hyundai',
        model: 'Tucson',
        year: 2024,
        price: 'USD 45.000',
        kms: '10.000km',
        image: 'url.com'
    }
]