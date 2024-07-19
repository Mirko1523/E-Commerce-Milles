import React from "react";
import './contact.css';

function Contact() {
    return (
        <div className="form-container">
            <div className="text-container">
                <h1 className="h1-contact">Hablemos</h1>
                <p className="p-contact">Completá el formulario digital y en instantes te estará 
                    llegando un mensaje acorde a los datos que coloques.
                    <br></br>Junto al mensaje, te llegará una invitacion para coordinar 
                    una reunión</p>
            </div>
            <div className="form-footer">
                <div className="input-container">
                    <p>Nombre</p>
                    <input className="input" placeholder="inserta aquí tu nombre..." type="text" name="nombre" />
                </div>
                <div className="input-container">
                    <p>Apellido</p>
                    <input className="input" placeholder="inserta aquí tu apellido..." type="text" name="apellido" />
                </div>
                <div className="input-container">
                    <p>Email</p>
                    <input className="input" placeholder="inserta aquí tu dirección de correo electronico..." type="text" name="email" />
                </div>
                <div className="input-container">
                    <p>Consulta el auto que te interesa</p>
                    <input className="input" placeholder="inserta aquí tu auto de interes..." type="text" name="auto" />
                </div>
                
                <button className="create" type="submit">Enviar</button>
            </div>
        </div>
    );
}

export default Contact;
