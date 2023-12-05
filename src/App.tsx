import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import InputComp from './Components/InputComp'

function App() {

  const [amortizationData, setAmoritzationData] = useState([]);


  return (
    <>
      <InputComp setAmoritzationData={setAmoritzationData}/>
    </>
  )
}

export default App
