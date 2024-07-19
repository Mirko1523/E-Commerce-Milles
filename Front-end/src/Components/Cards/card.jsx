import React from "react";
import imagen2 from '../../../MULTIMEDIA/ImagenAuto.png'
import {NavLink} from 'react-router-dom'
import './card.styles.css'

const carsData = [
    { make: 'Toyota', model: 'Corolla', year: 2022, valor: "$65000" },
    { make: 'Honda', model: 'Civic', year: 2021, valor: "$30000" },
    { make: 'Ford', model: 'Mustang', year: 2020, valor: "$45000" },
    { make: 'Toyota', model: 'Corolla', year: 2022, valor: "$65000" },
    { make: 'Honda', model: 'Civic', year: 2021, valor: "$30000" },
    { make: 'Ford', model: 'Mustang', year: 2020, valor: "$45000" }
   
];

function CreateCarCard({ car }) {
    return (
       
        <div className="styles-card">
            <img src={imagen2}/>
            <h2>{car.make} {car.model}</h2>
            <p>Año: {car.year}</p>
            <p>Valor:{car.valor}</p>
            <NavLink to="/contactanos"><button>Consultar</button></NavLink>
        </div>
        
    );
}

function CarList({numberOfCards}) {
    return (
        <div className="cards-containerStyles">
            {carsData.slice(0, numberOfCards).map((car, index) => (
                <CreateCarCard key={index} car={car} />
            ))}
        </div>
    );
}

export default CarList;
