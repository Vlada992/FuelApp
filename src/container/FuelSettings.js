import React, { Component } from 'react';
import '../App.css';
import DisplayFuelSettings from '../component/DisplayFuelSettings';



//new component going here, for settings, for inital value, for localStorage***********************



class FuelSettings extends Component {  
    constructor(props){
        super(props)
        this.fuelEconomy = this.fuelEconomy.bind(this);
        this.takeInpVal =  this.takeInpVal.bind(this);

        const localStorageFuelData= JSON.parse(localStorage.getItem('fuelSettings'));
        this.state = {
          fuelPrice:localStorageFuelData[2],
          fuelEconomyAverage:localStorageFuelData[3],  
          distance:localStorageFuelData[4],
          fuelEconomyResult:'', 
          oneKmFuelEconomy: '',  
          moneySpent:'',
          mileageInitial:'',  
          carMileageCurrent:localStorageFuelData[0],
          moneyspentPerKm:"",
          moneyAverageSpent:'',
          tankCapacity:localStorageFuelData[1],
          liter:'',
          galon:''
        }
    };


    fuelEconomy(event){
        if(this.state.truefalse){
        let oneKmFuelEconomy =  this.state.fuelEconomyAverage / 100      //   7/100  = 0.07
        let fuelEconomyResult =  oneKmFuelEconomy  *  this.state.distance   //0.07 * ex 55km   =~ 3.6
        let moneySpent = fuelEconomyResult * this.state.fuelPrice 
        let mileageInitial = Number(this.state.carMileageCurrent)
        let carMileageCurrent = Number(mileageInitial)   +  Number(this.state.distance);
        let moneyspentPerKm = Number(moneySpent) / Number(this.state.distance);
        let moneyAverageSpent =  this.state.fuelPrice * this.state.fuelEconomyAverage;

        this.setState({
            fuelEconomyResult: fuelEconomyResult,
            oneKmFuelEconomy: oneKmFuelEconomy,  
            moneySpent: moneySpent,
            mileageInitial: mileageInitial,  
            carMileageCurrent: carMileageCurrent,  
            moneyspentPerKm: moneyspentPerKm,
            moneyAverageSpent: moneyAverageSpent
        })
        const  st = this.state;
        const fuelSettings = [st.carMileageCurrent, st.tankCapacity, st.fuelPrice, st.fuelEconomyAverage, st.distance];
        const fuelSettingsName = ['carMileageCurrent', 'tankCapacity', 'fuelPrice', 'fuelEconomyAverage', 'distance' ]
        localStorage.setItem('fuelSettings', JSON.stringify(fuelSettings))
        fuelSettingsName.map(eachVal =>{ 
            this.child[eachVal].value  = '';
        })

    }else{
        alert('Fill needed inputs!')
    }
    };



    takeInpVal(event){
        const {name, value} = event.target
        this.setState({[name]: value, truefalse:true} )
        console.log('name', name)
        //1 LITER = 0.2641720524 GAL
    };

   
  
    render(){
      const allP = [this.state, {
        fuelEconomy: this.fuelEconomy,
        takeInpVal:this.takeInpVal
        }
      ];

    return (
    <div>

      <DisplayFuelSettings 
      ref={(node) => { this.child = node; }}
      {...allP}
      />

    </div>
    )
  };
}



export default FuelSettings;
