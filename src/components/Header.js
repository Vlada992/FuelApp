import React, { Component } from 'react';
import '../App.css';
import gasStationRed from '../images/oilRed.png';
import fuelPumpRed from "../images/fuelRed.png";


class Header extends Component {
  render(){
    return (
      <div id='h2cont' style={{display:'flex'}}>
       <h2 
       style={{fontFamily:'Impact', color: '#000',fontSize:36}}>
       <img 
       style={{marginRight:'-20px'}} 
       src={fuelPumpRed} 
       alt='fuel'/>uel Consumption App 
       <img 
       src={gasStationRed} 
       alt='fuel1'/></h2>
      </div>
    );
  }
}

export default Header;
