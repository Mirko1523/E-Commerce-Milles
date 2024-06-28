import React from "react";
import './home.styles.css'
import video1 from '../../../MULTIMEDIA/VIDEOFONDOHOME.mp4'

function HomePage() {
  return(
    <div>
      <div className="video-Home">
         <video src={video1} autoPlay loop muted playsInline className="video-background"
         ></video>
      </div>   
   
    </div>
  )
}

export default HomePage