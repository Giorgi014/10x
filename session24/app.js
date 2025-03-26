// 1. Batman’s Night Patrol (If Statements & Boolean Conditions)

function batmanPatrol(signalOn) {
  if (signalOn) {
    console.log("Batman is on patrol!");
  } else {
    console.log("Gotham is quiet tonight");
  }
}
batmanPatrol(true);
batmanPatrol(false);

// 2. Sorting Avengers (Truthy & Falsy Values)

function availableAvengers(avengers) {
  return avengers.filter(Boolean);
}

console.log(availableAvengers(["Iron Man", "", null, "Thor", undefined]));

// 3. Spider-Man’s Mask Check (Negation !)

function canRemoveMask(peopleAround) {
  if (peopleAround == 0) {
    console.log("Safe to remove mask!");
  } else {
    console.log("Keep the mask on!");
  }
}
canRemoveMask(0);
canRemoveMask(3);

// 4. Naruto’s Chakra Levels (Ternary Operator)

function checkChakra(level) {
  if (level > 80) {
    console.log("Full Power");
  } else if (level >= 50) {
    console.log("Still Fighting");
  } else {
    console.log("Need Ramen Recharge");
  }
}

checkChakra(90);
checkChakra(60);
checkChakra(30);

// 5. Jedi Academy: Light vs. Dark Side (Comparison & Logical Operators)

function isJediMaster(angerLevel, wisdomLevel) {
  return angerLevel < 30 && wisdomLevel > 70;
}
console.log(isJediMaster(20, 80));
console.log(isJediMaster(50, 90));

// 6. One Piece Treasure Hunt (Boolean Coercion & Conditionals)

function isTreasureSpot(content) {
  if (content) {
    return true;
  } else {
    return false;
  }
}

console.log(isTreasureSpot("gold"));
console.log(isTreasureSpot(0));

// 7. Doctor Strange’s Multiverse Passcode (Coercion & Quirky Comparisons)

function strangePasscode(code1, code2) {
  return code1 == code2 && code1 !== code2;
}

console.log(strangePasscode(null, undefined));
console.log(strangePasscode("0", 0));
console.log(strangePasscode(0, false));
console.log(strangePasscode(0, 0));

// 8. Loki’s Illusions (Object Comparison & Identity)

function isSameLoki(loki1, loki2) {
  return loki1 === loki2;
}

let lokiA = { name: "Loki" };
let lokiB = { name: "Loki" };
let lokiC = lokiA;

console.log(isSameLoki(lokiA, lokiB));
console.log(isSameLoki(lokiA, lokiC));

// 9. Schrödinger’s Cat (Advanced Boolean Logic & Edge Cases)

function schrodingerCat(state1, state2){
     if (state1 && state2) {
        return true
     }else{
        return false;
     }
}
console.log(schrodingerCat("alive", "dead"));
console.log(schrodingerCat(10, undefined)); 
console.log(schrodingerCat(1, "yes"));
console.log(schrodingerCat("cat", 0));