import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 // let counter = 5
  let [counter, setCounter] = useState(15);

  const addValue = () => {
    //counter = counter+1;
    if(counter >= 20){
      {alert("Value can not be greater than 20")}
    }else{

      setCounter(counter+1);
    }

  }

  const removeValue = () => {
    if(counter > 0) {
        setCounter(counter-1);
    }else{
      {alert("Value can not be decreased further")}
    }
  }

  return (
    <>
  
      <h1>Counter Project with Teena</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Increase value {counter}</button>
      <br /><br/>
      <button onClick={removeValue}>Decrease value {counter}</button>
    </>
  )
}

export default App
