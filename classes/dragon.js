// Your code here
class Dragon {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  breathsFire() {
    return `${this.name} breathes fire everywhere! BURN!!!!`;
  }
  static getDragons(...dragons) {
    console.log(dragons);
  }
}
const instance2 = new Dragon("Puff", "green");
const instance3 = new Dragon("Toothless", "black");
const dragons = Dragon.getDragons(instance2, instance3);
console.log(dragons);
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}
