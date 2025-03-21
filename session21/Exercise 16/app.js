let ticketPrice = 20;
let ticketsSold = 500;
let concertCosts = 8000;

let totalEarnings = ticketPrice * ticketsSold;
console.log(totalEarnings);


let profit = totalEarnings - concertCosts;
console.log(profit);



if (profit > 0) {
  console.log(`Concert Profit: $${profit}. Great success!`);
} else {
  console.log(`Concert did not cover costs. Earnings: $${totalEarnings}, Costs: $${concertCosts}.`);
}
