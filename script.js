let xp = 0;
let health = 100;
let gold = 100;
let currentWeapon = 0; //global variable
let fighting;
let monsterHealth;
let inventory = ["stick"];

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");
const weapons = [
  {
    name: "stick",
    power: 5,
  },
  {
    name: "dagger",
    power: 30,
  },
  {
    name: "calw hammer",
    power: 50,
  },
  {
    name: "sword",
    power: 100,
  },
];

const monsters = [
  {
    name: "slime",
    level: 2,
    health: 15,
  },
  {
    name: "fanged beast",
    level: 8,
    health: 60,
  },
  {
    name: "dragon",
    level: 20,
    health: 300,
  },
];

const locations = [
  {
    name: "town square",
    "buttons text": ["Go to store", "Go to cave", "Fight dragon"],
    "buttons functions": [goStore, goCave, fightDragon],
    text: "you are now in the towen square",
  },
  {
    name: "store",
    "buttons text": [
      "Buy 10 Health (10 gold)",
      "Buy Weapon (30 gold)",
      "Go to town square",
    ],
    "buttons functions": [buyHealth, buyWeapon, goTowen],
    text: "you are now in the store",
  },
  {
    name: "cave",
    "buttons text": ["Fight slime", "Fight fanged beast", "Go to town square"],
    "buttons functions": [fightSlime, fightBeast, goTowen],
    text: "you are now in the cave. you see some monster",
  },
  {
    name: "fight",
    "buttons text": ["Attack", "Dodge", "Run"],
    "buttons functions": [attack, dodge, goTowen],
    text: "you are now fighting the dragon",
  },
  {
    name: "kill monster",
    "buttons text": ["Go to towen square", "Go to towen square", "Easter Egg"],
    "buttons functions": [goTowen, goTowen, easterEgg],
    text: "The monster screams 'Arg!' as it dies. You gain XP and find gold",
  },
  {
    name: "lose",
    "buttons text": ["REPLAY?", "REPLAY?", "REPLAY?"],
    "buttons functions": [restart, restart, restart],
    text: "You die ☠️",
  },
  {
    name: "win",
    "buttons text": ["REPLAY?", "REPLAY?", "REPLAY?"],
    "buttons functions": [restart, restart, restart],
    text: "You defeat the dragon! you win the game 🎉",
  },
  {
    name: "easter Egg",
    "buttons text": ["2", "8", "Go to towen square"],
    "buttons functions": [pickTwo, pickEight, goTowen],
    text: "You find a secret game. pick a number above. Ten numbers will be randmly chosen between 0 and 10. If the number you choose matches one of the random numbers, you win!",
  },
];

// intialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

// update the game buttons and text based on the location of the player
function update(location) {
  monsterStats.style.display = "none";
  text.innerText = location.text;
  button1.innerText = location["buttons text"][0];
  button2.innerText = location["buttons text"][1];
  button3.innerText = location["buttons text"][2];

  button1.onclick = location["buttons functions"][0];
  button2.onclick = location["buttons functions"][1];
  button3.onclick = location["buttons functions"][2];
}

function goTowen() {
  update(locations[0]);
}

function goStore() {
  update(locations[1]);
}

function goCave() {
  update(locations[2]);
}

function buyHealth() {
  if (gold >= 10) {
    gold -= 10;
    goldText.innerText = gold;
    health += 10;
    healthText.innerText = health;
  } else {
    text.innerText = "you don't have enough gold";
  }
}
function buyWeapon() {
  if (inventory.length < weapons.length) {
    if (gold >= 30) {
      gold -= 30;
      goldText.innerText = gold;
      currentWeapon++;
      let newWeapon = weapons[currentWeapon].name;
      text.innerText = "You are now have " + newWeapon;
      inventory.push(newWeapon);
      text.innerText += " In Your inventory you have: " + inventory + ".";
    } else {
      text.innerText = "You don't have enough gold to buy a weapon";
    }
  } else {
    text.innerText =
      "You can't buy another weapon because you already have all the avaliable weapons.";
    button2.innerText = "sell weapon (15 gold)";
    button2.onclick = sellWeapon;
  }
}
function sellWeapon() {
  if (inventory.length > 1) {
    gold += 15;
    goldText.innerText = gold;
    let currentWeapon = inventory.shift(); //local variable
    text.innerText = "You now sell " + currentWeapon + ".";
    text.innerText += " In your inventory you have:" + inventory;
  } else {
    text.innerText = "Don't sell your only weapon!";
  }
}

function goFight() {
  update(locations[3]);
  monsterHealth = monsters[fighting].health;
  monsterStats.style.display = "block";
  monsterName.innerText = monsters[fighting].name;
  monsterHealthText.innerText = monsterHealth;
}
function fightSlime() {
  fighting = 0;
  goFight();
}

function fightBeast() {
  fighting = 1;
  goFight();
}
function fightDragon() {
  fighting = 2;
  goFight();
}

function attack() {
  text.innerText = "The " + monsters[fighting].name + " attack.";
  text.innerText +=
    " You attack it with your " + weapons[currentWeapon].name + ".";

  if (isMonsterHit()) {
    health -= getMonsterAttackValue(monsters[fighting].level);
  } else {
    text.innerText += "the monster miss.";
  }

  monsterHealth -=
    +weapons[currentWeapon].power + Math.floor(Math.random() * xp) + 1;
  healthText.innerText = health;
  monsterHealthText.innerText = monsterHealth;

  if (health <= 0) {
    lose();
  } else if (monsterHealth <= 0) {
    monsters[fighting].name === "dragon" ? winGame() : defeatMonster();
  }
  // there is a 10% chance that the player weapon breaks
  if (Math.random() <= 0.1 && inventory.length !== 1) {
    text.innerText += "your " + inventory.pop() + " breaks.";
    currentWeapon--;
  }
}

function dodge() {
  text.innerText = "You dodge the attack from " + monsters[fighting].name + ".";
}
function lose() {
  update(locations[5]);
}
function winGame() {
  update(locations[6]);

  // Create a celebratory confetti explosion
  confetti({
    particleCount: 200,
    spread: 160,
    origin: { y: 0.6 },
    colors: ["#FF0000", "#FFD700", "#00FF00", "#0000FF", "#FF00FF"],
  });

  // Add more confetti bursts over 2 seconds for extra celebration
  setTimeout(() => {
    confetti({
      particleCount: 100,
      angle: 60,
      spread: 70,
      origin: { x: 0 },
    });
  }, 500);

  setTimeout(() => {
    confetti({
      particleCount: 100,
      angle: 120,
      spread: 70,
      origin: { x: 1 },
    });
  }, 1000);
}
function defeatMonster() {
  gold += Math.floor(monsters[fighting].level * 6.7);
  xp += monsters[fighting].level;
  goldText.innerText = gold;
  xpText.innerText = xp;
  update(locations[4]);
}
function restart() {
  xp = 0;
  health = 100;
  gold = 100;
  currentWeapon = 0;
  inventory = ["stick"];
  goldText.innerText = gold;
  healthText.innerText = health;
  xpText.innerText = xp;

  goTowen();
}

function getMonsterAttackValue(level) {
  let hit = level * 2 - Math.floor(Math.random() * xp);
  console.log(hit);

  return hit;
}
// 80% of the time the dragon will hit or if the player health less than 20
function isMonsterHit() {
  return Math.random() > 0.2 || health < 20;
}

function easterEgg() {
  update(locations[7]);
}
function pick(guess) {
  let numbers = [];
  while (numbers.length < 10) {
    numbers.push(Math.floor(Math.random() * 11));
  }
  text.innerText = "You picked " + guess + " .Here are the random numbers:\n";
  for (let i = 0; i < numbers.length; i++) {
    text.innerText += numbers[i] + "\n";
  }

  if (numbers.indexOf(guess) !== -1) {
    text.innerText += "Right! You win 20 gold";
    gold += 20;
    goldText.innerText = gold;
  } else {
    text.innerText += "Wrong! You lose 10 health!";
    health -= 10;
    health.innerText = health;
    if (health <= 0) {
      lose();
    }
  }
}
function pickTwo() {
  pick(2);
}
function pickEight() {
  pick(8);
}
