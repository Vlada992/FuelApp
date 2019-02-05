import React from 'react';
import '../App.css';


class DisplayFuelSettings extends React.Component{
    render(){
    let states = this.props[0], funcs = this.props[1]
    return (
      <div  >

      <form id='h2cont' className={["container"].join(' ')}>
        <label>
            Ukupna kilometraza:
            <input 
             name='carMileageCurrent'
             type='number'
             onChange = {funcs.takeInpVal}
             placeholder = {states.carMileageCurrent}
             ref={(node) => { this.carMileageCurrent = node; }}
            />
        </label>

        <label>
            Kapacitet rezervoara:
            <input 
             name='tankCapacity'
             type='number'
             onChange = {funcs.takeInpVal}
             placeholder = {states.tankCapacity}
             ref={(node) => { this.tankCapacity = node; }}
            /> 
            <label> 
            L:<input 
            name='liter'
            type='radio'
            onChange = {funcs.takeInpVal}
            />
            </label>

            <label> 
            Gal:<input 
            name='galon'
            type='radio'
            onChange = {funcs.takeInpVal}
            />
            </label>
        </label> 


        <label>
            Cena goriva:
            <input 
            name='fuelPrice'
            type='number'
            placeholder = {states.fuelPrice}
            onChange = {funcs.takeInpVal}
            ref={(node) => { this.fuelPrice = node; }}

            /> $
        </label>

        <label>
            Potrosnja:
            <input 
            name='fuelEconomyAverage'
            type='number'
            placeholder = {states.fuelPrice}
            onChange = {funcs.takeInpVal}
            ref={(node) => { this.fuelEconomyAverage = node; }}
            /> l/100km
        </label>

        <label>
            Distanca:
            <input 
            name='distance'
            type='number'
            placeholder = {states.distance}
            onChange = {funcs.takeInpVal}
            ref={(node) => { this.distance = node; }}

            />
            <label> 
            Km:<input type='radio'/>
            </label>

            <label> 
            Mi:<input type='radio'/>
            </label>
        </label>
    </form>
        
    <button id='fuelEconomyId' onClick={funcs.fuelEconomy} >Fuel Economy</button>  {/* save your settings btn */}

 
    { states.fuelEconomyResult ?
    <div className={["resultDiv"].join(' ')} >
    <h4>Your car fuel economy on <span className='spanstat'>{states.distance}km</span>   is:  <span>{String(states.fuelEconomyResult).slice(0,4)}</span> liter</h4>
    <h4>Your car fuel economy per <span className='spanstat'>1km</span>  is  <span>{states.oneKmFuelEconomy}</span> liter </h4>
    <h4>You spent <span>{String(states.moneySpent).slice(0,4)}$</span> on your <span className='spanstat'>{states.distance}km</span> long road </h4>
    <h4>You spent: <span>{String(states.moneyspentPerKm).slice(0,4)}$</span> per each km you drove</h4>
    <h4>With your average  <span className='spanstat'>{states.fuelEconomyAverage}l/100km</span> you spend <span>{String(states.moneyAverageSpent).slice(0,4)}$</span> with curent fuel prices. </h4>
    <h4>Your car current mileage is:  <span>{states.carMileageCurrent}km</span> up from <span className='spanstat'>{states.mileageInitial}km</span></h4>
    </div>
    : <div></div>
    }
   
    </div>
    );
}
}



export default DisplayFuelSettings;
