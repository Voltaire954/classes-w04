const FriendlyDragon = require("../classes/friendly-dragon");
const EvilDragon = require("../classes/evil-dragon");
class FriendlyDragon {
  constructor(name, color, lifeGoals, friend) {
    this.name = name;
    this.color = color;
    this.lifeGoals = lifeGoals;
    this.friend = friend;
  }
}
class EvilDragon {
  constructor(name, color, evilDoings, nemesis) {
    this.name = name;
    this.color = color;
    this.evilDoings = evilDoings;
    this.nemesis = nemesis;
  }
}

const smaug = new EvilDragon(
  "Smaug",
  "black",
  [
    "take over your mountain kingdom",
    "steal all your dwarven gold",
    "burn down your floating village",
  ],
  "Dwarf King"
);
const falkor = new FriendlyDragon(
  "Falkor",
  "white",
  [
    "save Atreyu from the swamp",
    "save Atreyu from the Nothing",
    "scare the local bullies into a dumpster",
  ],
  "Bastian"
);

const dragons = [falkor, smaug];
module.exports.dragons = dragons;
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports.falkor = falkor;
  module.exports.smaug = smaug;
} catch {
  module.exports = null;
}
