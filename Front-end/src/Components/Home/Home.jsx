import React from "react";
import './home.styles.css'
import video1 from '../../../MULTIMEDIA/VideoenHome.mp4'
import CarList from "../Cards/card";
import {NavLink} from 'react-router-dom'

function HomePage() {


  return(
    
    <div>
  
      <div className="video-Home">
         <video src={video1} autoPlay loop muted playsInline className="video-background"
         ></video>
      </div>   
      <CarList numberOfCards={3}/>
         <div className="buttonstyle-home">
        <NavLink to="vehiculos"><button className="buttononsidestyle-home">Ver Más</button></NavLink>
      </div>
      
    </div>
  )
}

export default HomePage