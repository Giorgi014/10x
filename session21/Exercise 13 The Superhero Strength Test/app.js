let heroStrength = 95;
let villainStrength = 90;
let difference = heroStrength - villainStrength;

if (difference == 0) {
    console.log(`It's a strength stalemate! Neither Valiant nor Malakor can overpower the other.`);
} else if (difference >= 10) {
    console.log(`Valiant triumphs decisively! Malakor is utterly outmatched!`);
} else if (difference <= -10) {
    console.log(`Malakor's power is overwhelming! Valiant is soundly defeated!`);
} else if (difference > 0) {
    console.log(`Valiant barely edges out! A close call victory against Malakor!`);
}else {
    console.log(`Malakor narrowly prevails! A hard-fought win over Valiant!`);
    
}
