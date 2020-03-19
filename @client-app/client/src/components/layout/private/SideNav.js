import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Materialize_SideNav } from '../../../assets/scripts';



class SideNav extends Component {

  componentDidMount(){
    Materialize_SideNav();
  }    


  render() {
    return (
      <ul className='sidenav' id='mobile-nav'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/search'>Search</Link>
        </li>
        <li>
          <Link to='/popular'>Popular Places</Link>
        </li>
        <li>
          <Link to='/gallery'>Gallery</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    )
  }
}


export default SideNav; 