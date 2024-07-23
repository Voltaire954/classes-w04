// Your code here
class Dragon {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  breathesFire() {
    return `${this.name} breathes fire everywhere! BURN!!!!`;
  }
  static getDragons(...dragons) {
    return dragons.map((dragon) => dragon.name);
  }
}
// const instance2 = new Dragon("Puff", "green");
// const instance3 = new Dragon("Toothless", "black");
// const dragons = Dragon.getDragons(instance2, instance3);
module.exports.Dragon = Dragon;
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}
