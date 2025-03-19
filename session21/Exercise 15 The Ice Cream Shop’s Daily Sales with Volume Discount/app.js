let iceCreamCone = 4;
let conesSoldToday = 250;
let iceCreamSundae = 8;
let sundaesSoldToday = 120;
let discountPrice = 1000;
let conesSales = iceCreamCone * conesSoldToday;
let sundaesSales = iceCreamSundae * sundaesSoldToday;
let totalDailyEarning = conesSales + sundaesSales;
let discountRate = 0.05;
let discountAmount = totalDailyEarning * discountRate;

if (totalDailyEarning >= discountPrice) {
  console.log(`The amount of discount applied: $${discountAmount}`);
} else {
  console.log(`The amount of discount is not applied`);
}

console.log(`Today cones sales is: $${conesSales},
    Today sundaes sales is: $${sundaesSales},
    Total earnings before discount is: $${totalDailyEarning},
    Total earnings after discount is: $${totalDailyEarning - discountAmount},
    Volume Discount Applied: ${totalDailyEarning ? "Yes" : "No"}`);
