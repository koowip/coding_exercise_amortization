
//Used to formulate my thoughts on what data I want to send back
interface MonthlyData {
  monthOfLoan: number,
  balance: number,
  principalPaid: number,
  interestPaid: number,
  payment: number,
  totalInterest: number,
  totalPaid: number
}



export default function calculateAmortizationSchedule(loanAmount: number, loanLength: number, interestRate: number): MonthlyData[] {
  
  //All initial calculations for monthly payment
  let currentAmount = loanAmount;
  let convertedInterestRate = interestRate * .01;
  let monthlyInterest = convertedInterestRate / 12;
  let commonMath = Math.pow(( 1 + monthlyInterest ), loanLength);
  let monthlyPayment = loanAmount * ( (monthlyInterest * commonMath) / ( commonMath - 1))
  
  //variable instantiation 
  let totalInterest = 0;

  //array result for returning 
  let result = [];
  

  for(let i = 0; i < loanLength; i++){

    //variables/calculations for moving principal and interest values
    let interest = ( currentAmount * convertedInterestRate ) / 12;
    let principal = monthlyPayment - interest;
    currentAmount = currentAmount - principal;
    
    let totalPaid = monthlyPayment * (i + 1);
    totalInterest += interest;

    //return obj
    const currentMonthlyData: MonthlyData = {
      monthOfLoan: i + 1,
      balance: precisionRound(currentAmount),
      principalPaid: precisionRound(principal),
      interestPaid: precisionRound(interest),
      payment: currentAmount < principal ? precisionRound(principal):  precisionRound(monthlyPayment),
      totalInterest: precisionRound(totalInterest),
      totalPaid: precisionRound(totalPaid)
    }

    result.push(currentMonthlyData);
  }
  
  return result;
}

//Was getting weird off by .01 when compared to online calculator so I figured it was the base toFixed(2), made this rounding func to be more precise
function precisionRound(x: number){
  return parseFloat((Math.round( x * 100 ) / 100).toFixed(2));
}