import React from "react";
import './nosotros.styles.css'
function AboutUs (){
    return(
        <div>

    <hr></hr>
    <div className="aboutUsH1-styles">
   <h1>Sobre Nosotros</h1>
   </div>
   <hr></hr>
  <div className="aboutUsContent">
   <div className="aboutUsH3-styles">
    <p>Con más de 15 años de experiencia en el mercado de vehículos de Gama alta y Media Gama. 
    Milles cuenta con dos sucursales en las zonas de Entre Rios 
    (Gualeguaychú, Villaguay, Rosario, Concepción del Uruguay).</p>
   </div>

   <div className="aboutUsParrafo-styles">
    <p>Nuestro principio general es que comprar o vender un vehículo con nosotros sea más que eso, 
        sea una experiencia única y recomendable, 
        formamos relaciones a largo plazo basadas en la confianza y calidad de nuestros productos 
        y servicios.</p>
   </div>
   </div>
   </div>
    )
}

export default AboutUs