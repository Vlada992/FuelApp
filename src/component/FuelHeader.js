import React, { Component } from 'react';
import '../App.css';
import gasStationRed from '../images/oilRed.png';
import fuelPumpRed from "../images/fuelRed.png";


class Header extends Component {
  render(){
    return (
      <div id='headerCont'>
       <h2>
       <img  
       src={fuelPumpRed} 
       alt='fuel'/>uel Consumption App 
       <img 
       src={gasStationRed} 
       alt='fuel1'/>
       </h2>
      </div>
    );  
  }
}

export default Header;
