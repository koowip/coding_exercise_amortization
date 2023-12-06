import '../styles/TotalsInfoComp.css';
import currencyFormat from '../currency-format';

export default function TotalsInfoComp({info}) {

  const amount = currencyFormat(parseFloat(info.loanAmount));
  const totalPaid = currencyFormat(parseFloat(info.totalPaid));
  const totalInterestPaid = currencyFormat(parseFloat(info.totalInterestPaid));

  return (
    <div className="container">
    <div className="box">
      <h1>Loan Amount:</h1>
      <h2>{amount}</h2>
    </div>
    <div className="box">
      <h1>Total Paid:</h1>
      <h2>{totalPaid}</h2>
    </div>
    <div className="box">
      <h1>Total Interest Paid:</h1>
      <h2>{totalInterestPaid}</h2>
    </div>
  </div>
  ) 
};