import '../styles/TotalsInfoComp.css'

export default function TotalsInfoComp({info}) {

  return (
    <div className="container">
    <div className="box">
      <h1>Loan Amount:</h1>
      <h2>{info.loanAmount}</h2>
    </div>
    <div className="box">
      <h1>Total Paid:</h1>
      <h2>{info.totalPaid}</h2>
    </div>
    <div className="box">
      <h1>Total Interest Paid:</h1>
      <h2>{info.totalInterestPaid}</h2>
    </div>
  </div>
  ) 
};