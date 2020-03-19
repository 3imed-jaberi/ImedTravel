import React from 'react';


const Information = () => {
  return (
    <div className='card-panel teal white-text center'>
      <i className='material-icons'>email</i>
      <h5>Contact Us For Booking</h5>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo praesentium fugit tempore hic enim possimus molestias
      quisquam impedit corrupti eveniet.</p>
    </div>     
  )
};


const Map = () => { // just for university
  return (
    <div>
      <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25545.150973106334!2d10.119567107509228!3d36.83903026617838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd32f05d02675b%3A0x7b56da3ed1461e3c!2z2K3ZiiDYp9mE2KrYttin2YXZhg!5e0!3m2!1sar!2stn!4v1553354075881' width='510' height='200' frameBorder='0' title='myMap'  allowFullScreen />
    </div> 
  )
};


export { Information , Map };