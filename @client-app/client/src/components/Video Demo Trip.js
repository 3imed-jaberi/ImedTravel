import React from 'react';
import { demo } from '../constant';



const VideoDemoTrip = () => (
  <>
    <video id='background-video' width='100%' height='400' loop autoPlay>
      <source src={demo} type='video/mp4' />
    </video><br/>
  </>
);


export { VideoDemoTrip };