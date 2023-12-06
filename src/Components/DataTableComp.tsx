import '../styles/DataTableComp.css'
import currencyFormat from '../currency-format';

export default function DataTableComp({amoritizationData}) {

    return (
    <div className="data-table">
      <table>
        <thead>
          <tr>
            <th>Month of Loan</th>
            <th>Balance</th>
            <th>Principal Paid</th>
            <th>Interest</th>
            <th>Payment</th>
            <th>Total Interest</th>
            <th>Total Paid</th>
          </tr>
        </thead>
        <tbody>
          {amoritizationData.map((data: any, index: number) => (
            <tr key={index}>
              <td>{currencyFormat(parseFloat(data.monthOfLoan))}</td>
              <td>{currencyFormat(parseFloat(data.balance))}</td>
              <td>{currencyFormat(parseFloat(data.principalPaid))}</td>
              <td>{currencyFormat(parseFloat(data.interestPaid))}</td>
              <td>{currencyFormat(parseFloat(data.payment))}</td>
              <td>{currencyFormat(parseFloat(data.totalInterest))}</td>
              <td>{currencyFormat(parseFloat(data.totalPaid))}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    ) 
};