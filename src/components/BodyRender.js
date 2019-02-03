import React, { Component } from 'react';
import '../App.css';


class BodyRender extends Component {
    
    render(){
        let states = this.props[0], funcs = this.props[1]


    return (
      <div id='h2cont' style={{backgroundColor:'#E8E8E8'}} className='container'>
        <label>
            Ukupna kilometraza:
            <input 
             name='carMileage'
             type='number'
             onChange = {funcs.takeInpVal}
            />
        </label>

        <label>
            Kapacitet rezervoara:
            <input type='number'></input> L
        </label> 


        <label>
            Cena goriva:
            <input 
            name='fuelPrice'
            type='number'
            onChange = {funcs.takeInpVal}
            /> $
        </label>

        <label>
            Potrosnja:
            <input 
            name='economy'
            type='number'
            onChange = {funcs.takeInpVal}
            /> l/100km
        </label>

        <label>
            Distanca:
            <input 
            name='distance'
            type='number'
            onChange = {funcs.takeInpVal}
            />
            <label> 
            Km:<input type='radio'/>
            </label>

            <label> 
            Mi:<input type='radio'/>
            </label>
        </label>
        



    <button onClick={funcs.fuelEconomy} style={{marginTop:'2%'}} >Fuel Economy</button>

 
    
    <div className={[ states.hideResText, "resultDiv"].join(' ')} >
    <h4>Your car fuel economy on <span className='spanstat'>{states.distance}km</span>   is:  <span>{String(states.economyResult).slice(0,4)}</span> liter</h4>
    <h4>Your car fuel economy per <span className='spanstat'>1km</span>  is  <span>{states.ecoOne}</span> liter </h4>
    <h4>You spent <span>{String(states.moneySpent).slice(0,4)}$</span> on your <span className='spanstat'>{states.distance}km</span> long road </h4>
    <h4>You spent: <span>{String(states.spentPerKm).slice(0,4)}$</span> per each km you drove</h4>
    <h4>With your average  <span className='spanstat'>{states.economy}l/100km</span> you spend <span>{states.averageSpent}$</span> with curent fuel prices. </h4>
    <h4>Your car current mileage is:  <span>{states.carMileage}km</span> up from <span className='spanstat'>{states.mileageBefore}km</span></h4>

    </div>
   

    
      </div>
    );
  }
}

export default BodyRender;
