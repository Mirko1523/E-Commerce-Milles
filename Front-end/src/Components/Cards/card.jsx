import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getcars } from "../../Redux/Actions/actions"
import { NavLink } from 'react-router-dom';
import './card.styles.css';

function CreateCarCard({ car }) {
    return (
        <div className="styles-card">
            <img src={car.image} alt={`${car.make} ${car.model}`} />
            <h2>{car.make} {car.model}</h2>
            <p>Año: {car.year}</p>
            <p>Valor: {car.price}</p>
            <NavLink to="/contactanos"><button>Consultar</button></NavLink>
        </div>
    );
}

function CarList({ numberOfCards }) {
    const dispatch = useDispatch();
    const cars = useSelector(state => state.cars);

    useEffect(() => {
        dispatch(getcars());
    }, [dispatch]);

    console.log(cars);

    return (
        <div className="cards-containerStyles">
            {cars && cars.length > 0 && cars.slice(0, numberOfCards).map((car, index) => (
                <CreateCarCard key={index} car={car} />
            ))}
        </div>
    );
}


export default CarList;