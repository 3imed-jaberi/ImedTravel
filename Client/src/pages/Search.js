import React, { Component } from 'react';
import axios from 'axios';

import { Materialize_AutoComplete } from '../assets/scripts/main';

import Slider from '../components/Slider';
import Trip from '../components/Trip';


class Search extends Component {
  state = {
    constTrips: [],
    trips: [],
    search:''
  };

/*   filterList = (event) =>{
    var updatedList = this.state.initialItems;
    updatedList = updatedList.filter(function(item){
      return item.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
    });
    this.setState({items: updatedList});
  }; */

 componentDidMount() {
  Materialize_AutoComplete();

    axios.get(`http://localhost/api/trips.php`)
      .then(res => {
        const trips = res.data;
        const constTrips = trips ;
        // console.log(trips);
        this.setState({ trips , constTrips });
      });
 }

 updateSearch = event => {
  this.setState({ search : event.target.value });
  console.log(this.state.search);
  console.log(this.state.trips);
  let updatedTrips = this.state.trips;
    updatedTrips = updatedTrips.filter((trip) => {
      return trip.name.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
    });
    this.setState({trips: updatedTrips});
    if (event.target.value.length === 0){
      this.setState({trips: this.state.constTrips});
    }
    // 
  }

  render() {
    return (
      <div>
        <Slider />
{/*         <Search /> */}

<section id="search" className="section section-search teal darken-1 white-text center scrollspy">
    <div className="container">
      <div className="row">
        <div className="col s12">
          <h3>Search Destinations</h3>
          <div className="input-field">
            <input type="text" value={this.state.search} onChange={this.updateSearch} className="white grey-text autocomplete" id="autocomplete-input" placeholder="Sousse, Touzeur, etc..." />
          </div>
        </div>
      </div>
    </div>
  </section>
        <br/><br/><br/><br/>
        <div className="container">
          <div className="row">
            { this.state.trips.map(( element , index ) => <Trip key={index} data={element} />) }
          </div>
        </div>
    </div>
    )
  }
}

export default Search ;
