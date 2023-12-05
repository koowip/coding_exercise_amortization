interface MonthlyData {
  monthOfLoan: number,
  balance: number,
  principalPaid: number,
  interestPaid: number,
  payment: number,
  totalInterest: number,
  totalPaid: number
}



export default function calculateAmortizationSchedule(loanAmount: number, loanLength: number, interestRate: number){
  
  let currentAmount = loanAmount;
  let convertedInterestRate = interestRate * .01;
  let monthlyInterest = convertedInterestRate / 12;
  let commonMath = Math.pow(( 1 + monthlyInterest ), loanLength);
  let monthlyPayment = loanAmount * ( (monthlyInterest * commonMath) / ( commonMath - 1) )
 
  monthlyPayment = parseFloat(monthlyPayment.toFixed(2));
  
  console.log(currentAmount + " " + monthlyInterest + " " + commonMath + " " + monthlyPayment);
  
  let result = [];
  let totalInterest = 0;

  for(let i = 0; i < loanLength; i++){

    let interest = ( currentAmount * convertedInterestRate ) / 12;
    let principal = monthlyPayment - interest;
    currentAmount = currentAmount - principal;

    let totalPaid = monthlyPayment * (i + 1);
    totalInterest += interest;

    const currentMonthlyData = {
      loanMonth: i + 1,
      balance: currentAmount.toFixed(2),
      principalPaid: principal.toFixed(2),
      interest: interest.toFixed(2),
      payment: monthlyPayment.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
      totalPaid: totalPaid
    }

    console.log(currentMonthlyData);
  }


  
  return 0;
}