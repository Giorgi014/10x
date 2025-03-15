let gandalfPower = 100;
let dumbledorePower = 120;

gandalfPower += 30;
dumbledorePower -= 20;

console.log("Gandalf's new power: " + gandalfPower);
console.log("Dumbledore's new power: " + dumbledorePower);

if (gandalfPower > dumbledorePower) {
    console.log("Gandalf is stronger!");
} else if (gandalfPower < dumbledorePower) {
    console.log("Dumbledore is stronger!");
} else {
    console.log("They are equally strong!");
}