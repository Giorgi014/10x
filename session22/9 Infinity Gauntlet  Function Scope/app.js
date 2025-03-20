function snapFingers() {
  const stones = 6;

  function checkStones() {
    if (stones == 6) {
      console.log(`Thanos has ${stones} stones. The universe trembles!`);
    }else{
        console.log(`Thanos has not ${stones} stones. The universe not trembles!`);
    }
  }
  checkStones();
}
snapFingers();

