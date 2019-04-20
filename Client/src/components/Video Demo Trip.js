import React from 'react';

import demo from "../assets/videos/Demo-Tunisia-Trip.mp4";


const VideoDemoTrip = () => {
  return (
    <div>
          <video id="background-video" width="100%" height="400" loop autoPlay >
                <source src={ demo } type="video/mp4" />
          </video><br/>
    </div>
  )
}

export default VideoDemoTrip ;
