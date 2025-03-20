function sortStudent(name, callback) {
  return `Sorting ${name} into...${callback()}`;
}
function randomHouse() {
  const house = ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"];
  const randomHouse = Math.floor(Math.random() * house.length);
  return house[randomHouse];
}

console.log(sortStudent("Gendalf", randomHouse));

