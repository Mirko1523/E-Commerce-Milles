import React from "react";
import './home.styles.css'
import video1 from '../../../MULTIMEDIA/Y2meta.app-Lexus Car Dealership –  FPV Drone Fly Through-(1080p).mp4'
function HomePage() {
  return(
    <div>
         <video src={video1} autoPlay loop muted playsInline className="video-background"
         style={{
          width: '225vh', 
          height: '75vh', 
          objectFit: 'cover', 
          border:'50px',
        }}
         ></video>
         
   
    </div>
  )
}

export default HomePage