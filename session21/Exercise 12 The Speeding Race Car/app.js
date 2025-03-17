let carSpeed = 30;
let speedLimit = 50;

carSpeed += 25;

if (carSpeed > speedLimit) {
  console.log(`Speed Warning: You are going too fast! Current speed: ${carSpeed}mph`);
} else {
    console.log(`Speed is okay. Current speed: ${carSpeed}mph`);
}