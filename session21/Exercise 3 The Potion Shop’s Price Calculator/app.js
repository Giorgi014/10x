let healthPotion = 25;
let manaPotion = 25;

console.log(healthPotion);
console.log(manaPotion);

let totalCost = healthPotion * 3 + manaPotion * 2;
console.log("Total cost without discount" + " " +totalCost);


if (totalCost > 50) {
  totalCost *= 0.8;
  console.log("Discount applied!");
} else {
    console.log("No discount applied.");
}
console.log("The total cost is: " + totalCost + " gold coins.");
