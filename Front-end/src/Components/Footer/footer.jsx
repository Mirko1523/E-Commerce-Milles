import React from "react"
import {NavLink} from 'react-router-dom'
import './footer.styles.css'
function Footer () {

return (
        <footer className='footer'>
            <div>
                <div className="title-footer">
                    <h1>Milles Perfomance</h1>
                </div>
                <hr></hr>
                <div className="contact-footer">
                    <h3>Ante cúalquier duda</h3>
                    <div className="contactbg-footer">
                    <h3 className="contactnodecoration1-footer"><NavLink to="/contactanos" className="contactnodecoration-footer">📞¡CONTACTATE!📞</NavLink></h3>
                    </div>
                    <p>🚗Te responderemos lo antes posible ante cualquier pregunta🚗</p>
                </div>
                
                </div>
        </footer>
    );
}

export default Footer;