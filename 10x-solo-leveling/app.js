const xpByDungeon = {
    E: { basic: 1, strong: 5, boss: 30 },
    D: { basic: 5, strong: 10, boss: 60 },
    C: { basic: 10, strong: 15, boss: 90 },
    B: { basic: 15, strong: 20, boss: 120 },
    A: { basic: 20, strong: 25, boss: 150 },
    S: { basic: 50, strong: 100, boss: 1000 },
  };
  
  const levelRequirements = [
    { minLevel: 0, maxLevel: 10, xpRequired: 1000 },
    { minLevel: 11, maxLevel: 15, xpRequired: 2000 },
    { minLevel: 16, maxLevel: 20, xpRequired: 3000 },
    { minLevel: 21, maxLevel: 25, xpRequired: 4000 },
    { minLevel: 26, maxLevel: 30, xpRequired: 5000 },
    { minLevel: 31, maxLevel: Infinity, xpRequired: 8000 },
  ];
  
  const dungeonAccess = {
    10: "E",
    15: "D",
    20: "C",
    25: "B",
    30: "A",
    31: "S",
  };
  
  function getDungeonRank(level) {
    for (const key in dungeonAccess) {
      if (level <= parseInt(key)) {
        return dungeonAccess[parseInt(key)];
      }
    }
    return "S";
  }
  
  function getXPRequirement(level) {
    for (const range of levelRequirements) {
      if (level >= range.minLevel && level <= range.maxLevel) {
        return range.xpRequired;
      }
    }
    return 8000;
  }
  
  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function simulateDungeon(level) {
    const rank = getDungeonRank(level);
    const xpTable = xpByDungeon[rank];
    const basicEnemies = randomInt(10, 30);
    const strongEnemies = randomInt(5, 10);
    const bossDefeated = Math.random() < getBossWinChance(rank);
  
    let totalXP = basicEnemies * xpTable.basic + strongEnemies * xpTable.strong;
    if (bossDefeated) {
      totalXP += xpTable.boss;
    }
  
    console.log(`Dungeon rank: ${rank}`);
    console.log(`NPCs killed: Basic - ${basicEnemies}, Strong - ${strongEnemies}, Boss - ${bossDefeated ? 1 : 0}`);
    console.log(`XP Earned: ${totalXP}`);
  
    return totalXP;
  }
  
  function getBossWinChance(rank) {
    const chances = {
      E: 0.8,
      D: 0.6,
      C: 0.6,
      B: 0.5,
      A: 0.4,
      S: 0.3,
    };
    return chances[rank];
  }
  
  function enterLevel(targetLevel) {
    let currentLevel = 0;
    let totalXP = 0;
    let dungeonsCleared = 0;
  
    while (currentLevel < targetLevel) {
      const xpRequired = getXPRequirement(currentLevel);
      const dungeonXP = simulateDungeon(currentLevel);
      totalXP += dungeonXP;
      dungeonsCleared++;
  
      if (totalXP >= xpRequired) {
        totalXP -= xpRequired;
        currentLevel++;
      }
    }
  
    console.log(`Total dungeons cleared: ${dungeonsCleared}`);
    console.log(`Total XP earned: ${totalXP}`);
  }
  
  enterLevel(50);
  