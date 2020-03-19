import React, { Component } from 'react'
import { Slider, MainServices, PopularPlaces, Chatbot } from '../components';



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


export { Home };