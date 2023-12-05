import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import InputComp from './Components/InputComp'
import DataTableComp from './Components/DataTableComp';

function App() {

  const [amortizationData, setAmoritzationData] = useState([]);


  return (
    <>
      <InputComp setAmoritzationData={setAmoritzationData}/>
      <DataTableComp data={amortizationData}/>
    </>
  )
}

export default App
