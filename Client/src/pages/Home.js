import React, { Component } from 'react'

import Slider from '../components/Slider';
import MainServices from '../components/Main Services';
import PopularPlaces from '../components/Popular Places';
import Chatbot from '../components/Chatbot';

class Home extends Component {
  render() {
    return (
      <div>
        <Chatbot />
        <Slider />
        <MainServices />
        <PopularPlaces />
      </div>
    )
  }
}

export default Home ;
