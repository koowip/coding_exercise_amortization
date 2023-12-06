import { useState } from 'react'
// import './App.css'
import InputComp from './Components/InputComp'
import DataTableComp from './Components/DataTableComp';

function App() {

  const [amortizationData, setAmoritzationData] = useState([]);


  return (
    <>
      <InputComp setAmoritzationData={setAmoritzationData}/>
      {amortizationData.length > 0 && <DataTableComp amoritizationData={amortizationData}/>}
    </>
  )
}

export default App
