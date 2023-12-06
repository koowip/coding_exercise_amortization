import '../styles/DataTableComp.css'

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
              <td>{data.monthOfLoan}</td>
              <td>{data.balance}</td>
              <td>{data.principalPaid}</td>
              <td>{data.interestPaid}</td>
              <td>{data.payment}</td>
              <td>{data.totalInterest}</td>
              <td>{data.totalPaid}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    ) 
};