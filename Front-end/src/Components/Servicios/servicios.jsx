import React from "react";
import "./servicios.styles.css"
import img5 from '../../../MULTIMEDIA/fondocarrito.png'
function Services () {
    return(
        <div>
        <div className="title-services">
            <hr></hr>
            <p>¿Que servicios Ofrecemos?</p>
            <hr></hr>
        </div>
        <div className="sell-services">
         <h1>Ventas</h1>
         <p>Vendé tu auto de Alta Gama y Media Gama con nosotros, hacelo con seguridad y confianza. 
            Con más de 15 años de experiencia en el mercado de vehículos, 
            te garantizamos una experiencia única y recomendable. En Milles te lo hacemos fácil, 
            nos traés tu auto y nosotros nos encargamos del resto.
            Contactanos para asesorarte!</p>
            <div className="images-services">
                 <img src="http://www.hascar.com.ar/static/imagenes/icono1.png" className="image-services1"/>
            </div>
        </div>
         <div className="buy-services">
         <h1>Compras</h1>
         <p>Vendé tu auto de Alta Gama y Media Gama con nosotros, hacelo con seguridad y confianza. 
            Con más de 15 años de experiencia en el mercado de vehículos, 
            te garantizamos una experiencia única y recomendable. En Milles te lo hacemos fácil, 
            nos traés tu auto y nosotros nos encargamos del resto.
            Contactanos para asesorarte!</p>
               <div className="images-services">
             <img src={img5} className="image-services2"/>
            </div>
        </div>
         <div className="management-services">
         <h1>Gestoria</h1>
         <p>Vendé tu auto de Alta Gama y Media Gama con nosotros, hacelo con seguridad y confianza. 
            Con más de 15 años de experiencia en el mercado de vehículos, 
            te garantizamos una experiencia única y recomendable. En Milles te lo hacemos fácil, 
            nos traés tu auto y nosotros nos encargamos del resto.
            Contactanos para asesorarte!</p>
               <div className="images-services">
                 <img src="http://www.hascar.com.ar/static/imagenes/icono3.png" className="image-services3"/>
            </div>
        </div>
       </div>
    )
}

export default Services;