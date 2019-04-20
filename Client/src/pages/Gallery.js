import React, { Component } from 'react';


import { Materialize_MaterialBoxed } from "../assets/scripts/main";


import VideoDemoTrip from '../components/Video Demo Trip';
import PhotoDemoTrip from '../components/Photo Demo Trip';


class Gallery extends Component {

  componentDidMount(){
    Materialize_MaterialBoxed();
  }

  render() {
    return (
 <section id="gallery" className="section section-gallery scrollspy">
    <div className="container">
      <h4 className="center">
        <span className="teal-text">Photo</span> Gallery
      </h4><br/>
      <VideoDemoTrip />
      <hr/>
      <PhotoDemoTrip />
    </div>
</section>
    )
  }
}

export default Gallery ;