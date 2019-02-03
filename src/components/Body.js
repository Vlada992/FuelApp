import React, { Component } from 'react';
import '../App.css';
import BodyRender from './BodyRender';


class Body extends Component {
    constructor(props){
        super(props)
        this.fuelEconomy = this.fuelEconomy.bind(this);
        this.takeInpVal =  this.takeInpVal.bind(this);

        this.state = {
          fuelPrice:'',
          economy:'',
          distance:'',
          economyResult:'',
          ecoOne: '',
          hideResText:'classHide',
          moneySpent:'',
          mileageBefore:'',
          carMileage:'',
          spentPerKm:"",
          averageSpent:''
        }
    };


    fuelEconomy(event){

        if(this.state.distance){

        let oneKmEconomy =  this.state.economy / 100      //   7/100  = 0.07
        let fuelEco =  oneKmEconomy  *  this.state.distance   //0.07 * ex 55km   =~ 3.6
        let spentMoney = fuelEco * this.state.fuelPrice // 
        let carMilesBefore = Number(this.state.carMileage)
        let carMiles = carMilesBefore   +  Number(this.state.distance);
        let pricePerKm = Number(spentMoney) / Number(this.state.distance);
        let carAverageSpent =  this.state.fuelPrice * this.state.economy;
        console.log('svi states trenutno:', this.state)

        this.setState({
            economyResult: fuelEco,
            ecoOne: oneKmEconomy,
            hideResText:'',
            moneySpent: spentMoney,
            mileageBefore:carMilesBefore,
            carMileage: carMiles,
            spentPerKm: pricePerKm,
            averageSpent: carAverageSpent

        })
    }else  {
        alert('Fill needed inputs!')
    }
    };


    takeInpVal(event){
        const {name, value} = event.target
        console.log('VREDNOST INPUTA:', value, 'ime:', name);
        this.setState({[name]: value})
    };

  
    render(){
      const allP = [
      this.state,
      {
        fuelEconomy: this.fuelEconomy,
        takeInpVal:this.takeInpVal
      }
      ]

    return (
    <div>
      <BodyRender {...allP}/>
    </div>
    )
  };
}



export default Body;
