import React from "react"
import './contact.css'
function Contact() {
     return(
    <div className="form-footer">
                    <div className="input-container">
                        <p>Tu nombre</p>
                        <input className="input" placeholder="Nombre" type="text" name="nombre" />
                    </div>
                    <div className="input-container">
                        <p>Tu nombre</p>
                        <input className="input" placeholder="Nombre" type="text" name="nombre" />
                    </div>
                    <div className="input-container">
                        <p>Tu Apellido</p>
                        <input className="input" placeholder="Apellido" type="text" name="apellido" />
                    </div>
                    <div className="input-container">
                        <p>Email</p>
                        <input className="input" placeholder="Email" type="text" name="Email" />
                    </div>
                    <div className="input-container">
                        <p>Auto que te interesa comprar o vender</p>
                        <input className="input" placeholder="Auto" type="text" name="auto" />
                    </div>
                    <button className="create" type="submit">Enviar</button>
                </div> 
     )
}

export default Contact;