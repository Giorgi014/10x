// JavaScript Arrays and Array Methods - Assignments

// 1. The Sorting Hat (Harry Potter)

const names = ["Harry", "Hermione", "Ron", "Draco"];
const houses = ["Gryffindor", "Ravenclaw", "Hufflepuff", "Slytherin"];

const sortStudents = names.map((name) => {
  const randomIndex = Math.floor(Math.random() * houses.length);
  const house = houses[randomIndex];
  return `${name}-${house}`;
});

console.log(sortStudents);

// 2. The Pokémon Filter

const pokemons = [
  { name: "Pikachu", CP: 320 },
  { name: "Charizard", CP: 900 },
];
const strongestPokemon = pokemons.filter((power) => power.CP > 500);
console.log(strongestPokemon);

// 3. Avengers Assemble (Reduce)

const avangers = [
  { hero: "Iron Man", budget: 5000 },
  { hero: "Hulk", budget: 2000 },
];

const totalBudget = avangers.reduce((heros, total) => heros + total.budget, 0);

console.log(`Total budget: ${totalBudget}`);

// 4. The Lost Treasure Map

const direction = ["left", "right", "forward"];
const move = "Move ";

const sortDirections = direction.map((direct) => move + direct);
console.log(sortDirections);

// Normal Tasks

// 5. The Jedi Archives

const losts = ["Luke", "Obi-Wan", "Yoda", "Anakin"];
const findMan = losts.find((name) => name === "Yoda");
if (findMan) {
  console.log("Master found!");
}

// 6. The One Ring Inventory

const inventory = ["Lembas Bread"];
inventory.push("Ring");
inventory.pop();

console.log(inventory);

// 7. Spider-Man’s Web of Crime

const crimeLocations = ["Times Square", "Central Park", "Brooklyn"];
crimeLocations.sort();
console.log(crimeLocations);

// 8. The Time Stone (Array Slicing)

const mysticalOccurrences = [
  "Dormammu Attack",
  "Multiverse Glitch",
  "Ancient One’s Warning",
  "Time Loop",
  "Portal Opening",
];
const occurrences = mysticalOccurrences.slice(2);

console.log(occurrences);

// Hard Tasks

// 9. Matrix Reloaded: Data Processing

const numbers = [3, 7, 15, 22];

const binaryNumbers = numbers.map(num => num.toString(2));
console.log(binaryNumbers); 

const highestNumber = numbers.reduce((max, current) => {
    return current > max ? current : max;
}, numbers[0]);

console.log(highestNumber);

// 10. Cyberpunk City Data Processing

const valueNumbers = [99, 135, 76, 200, 150, 89];
console.log(valueNumbers);
const binaryValues = valueNumbers.map(numb => numb.toString(16));
console.log(binaryValues);
const hightValue = valueNumbers.filter((hight) => hight >= 100);
console.log(hightValue);
const totalValue = valueNumbers.reduce((curr, totalV) => curr + totalV, 0);
console.log(totalValue);
const riskValue = valueNumbers.find((risk) => risk > 150);
if (riskValue) {
    console.log(riskValue);   
}

for (let i = valueNumbers.length; i >= 0; i--) {
    if (valueNumbers[i] < 80) {
      valueNumbers.splice(i, 1);
    }
}
console.log(valueNumbers);
