import React from 'react';
import './App.css';
import FuelHeader from './component/FuelHeader';
import FuelSettings from './container/FuelSettings';


function App(){
    return (
      <div>
       <FuelHeader/>
       <FuelSettings/>
      </div>
    )
};

export default App;
