import { useState } from "react";
import calculateAmortizationSchedule from "../amortization-calculator";


export default function InputComp({setAmoritzationData}) {

  const [formData, setFormData] = useState({
    loanAmount: 0,
    loanInterestRate: 0,
    loanLength: 0
  })

  /*
    Seperated out changing of inputs into its own function as to easily deconstruct the target.name 
    and target.value into the formData obj.
  */
  const handleInputChange = (event: { target: { name: any; value: any; }; }) => {
    const { name, value } = event.target;
    setFormData({
    ...formData,
    [name]: value
    });
   };
 

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    const amortizationSchedule = calculateAmortizationSchedule(formData.loanAmount, formData.loanLength, formData.loanInterestRate);
    setAmoritzationData(amortizationSchedule);
  };


  return(
  <form onSubmit={handleSubmit}>
    <input type="number" name="loanAmount" onChange={handleInputChange} placeholder="Total Loan Amount" />
    <input type="number" name="loanLength"  onChange={handleInputChange} placeholder="Loan Length in Months" />
    <input type="number"  step="0.01" name="loanInterestRate"  onChange={handleInputChange} placeholder="Loan Interest" />
    <button type="submit">Submit</button>
  </form>
  );
}