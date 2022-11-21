import React, { useReducer } from 'react'
import BtnDown from '../BtnDown/BtnDown'
import BtnUp from '../BtnUp/BtnUp'
import Count from '../Count/Count'



const CounterApp = () => {
  
  
  return (
    <div className='counterAppContainer'>   
     <BtnUp count={3}/>
     <BtnUp />
      <Count />
      <BtnDown/>
      <BtnDown count={3}/>
    </div>
  )
}

export default CounterApp