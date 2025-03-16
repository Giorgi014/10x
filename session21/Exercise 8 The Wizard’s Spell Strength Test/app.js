const spellPower1 = 50;
const spellPower2 = 75;
const spellPower3 = 100;

if (spellPower1 > spellPower2) {
    if (spellPower1 > spellPower3) {
        console.log("The strongest spell power is:" + spellPower1);
    }
}

if (spellPower2 > spellPower1) {
    if (spellPower2 > spellPower3) {
        console.log("The strongest spell power is:" + spellPower2);
    }
}

if (spellPower3 > spellPower1) {
    if (spellPower3 > spellPower2) {
        console.log("The strongest spell power is:" + spellPower3);
    }
}

if (spellPower1 === spellPower2) {
    console.log("Spell 1 and Spell 2 have equal power!");
}

if (spellPower1 === spellPower3) {
    console.log("Spell 1 and Spell 3 have equal power!");
}

if (spellPower2 === spellPower3) {
    console.log("Spell 2 and Spell 3 have equal power!");
}