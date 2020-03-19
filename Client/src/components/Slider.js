import React , { Component } from 'react';


// Images ..
import resort1 from '../assets/images/slider & popular places/resort1.jpg';
import resort2 from '../assets/images/slider & popular places/resort2.jpg';
import resort3 from '../assets/images/slider & popular places/resort3.jpg';

// my js style 
import { Materialize_Slider } from '../assets/scripts';

class Slider extends Component {

  componentDidMount(){
    Materialize_Slider();
  }

  render() {
    return (
<section className="slider">
  <ul className="slides">
    <li>
      <img src={resort1} alt="first img" />
      <div className="caption center-align">
        <h2>Take Your Dream Vacation</h2>
        <h5 className="light grey-text text-lighten-3 hide-on-small-only"> projet php projet php projet php projet php projet php projet php projet php projet php projet </h5>
      </div>
    </li>
    <li>
      <img src={resort2} alt="second img" />
      <div className="caption left-align">
        <h2>We Work With All Budgets</h2>
        <h5 className="light grey-text text-lighten-3 hide-on-small-only"> projet php projet php projet php projet php projet php projet php projet php projet php projet </h5>
      </div>
    </li>
    <li>
      <img src={resort3} alt="third img" />
      <div className="caption right-align">
        <h2>Group & Individual Getaways</h2>
        <h5 className="light grey-text text-lighten-3 hide-on-small-only"> projet php projet php projet php projet php projet php projet php projet php projet php projet </h5>
      </div>
    </li>
  </ul>
</section>
    )
  }
}

export default Slider ;
