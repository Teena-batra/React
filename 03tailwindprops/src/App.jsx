import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./components/Card"

function App() {
  
  let myObj = {
    username: "Teena",
    age: 23
  } 

  let arr = [1,2,3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      <Card Name= "Teena Batra" btnText="Click Me"/>
    </>
  )
}

export default App
