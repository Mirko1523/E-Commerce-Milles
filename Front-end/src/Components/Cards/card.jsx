import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getcars } from "../../Redux/Actions/actions"
import imagen2 from '../../../MULTIMEDIA/ImagenAuto.png';
import { NavLink } from 'react-router-dom';
import './card.styles.css';

function CreateCarCard({ car }) {
    return (
        <div className="styles-card">
            <img src={imagen2} alt={`${car.make} ${car.model}`} />
            <h2>{car.make} {car.model}</h2>
            <p>Año: {car.year}</p>
            <p>Valor: {car.valor}</p>
            <NavLink to="/contactanos"><button>Consultar</button></NavLink>
        </div>
    );
}

function CarList({ numberOfCards }) {
    const dispatch = useDispatch();
    const cars = useSelector(state => state.cars.cars);

    useEffect(() => {
        dispatch(getcars());
    }, [dispatch]);

    return (
        <div className="cards-containerStyles">
            {cars.slice(0, numberOfCards).map((car, index) => (
                <CreateCarCard key={index} car={car} />
            ))}
        </div>
    );
}

export default CarList;
