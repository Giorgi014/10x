let fuelCapacity = 1000;
let currentFuel = 850;

console.log(fuelCapacity);
console.log(fuelCapacity);


let capacity = currentFuel * 0.8;
console.log(capacity);


if (currentFuel > capacity) {
    console.log("Fuel levels are sufficient. Ready for launch!");
} else {
    console.log("Fuel levels are too low. Refueling needed before launch.");
}