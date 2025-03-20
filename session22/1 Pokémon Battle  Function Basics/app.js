function compareAttack(pokemon1, attack1, pokemon2, attack2) {
  if (attack1 > attack2) {
    return `${pokemon1} is stronger!`;
  } else if (attack1 < attack2) {
    return `${pokemon2} is stronger!`;
  } else {
    return "Both Pokémon have the same attack power!";
  }
}

let result = compareAttack("Pikachu", 55, "Charizard", 84);
console.log(result);
