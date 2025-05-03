const util = require("util");

/* Inheritance */
const Robot = function () {};
Robot.prototype.drive = function () {
  console.log(`${this.name} is driving!`);
};

const MurderRobot = function (name) {
  this.name = name;
};
MurderRobot.prototype.kill = function () {
  const killedWho = (Math.random() * 10) % 2 === 0 ? "Dog" : "Cat";
  console.log(`${this.name} killed a ${killedWho}`);
};
util.inherits(MurderRobot, Robot);

const CleanerRobot = function (name) {
  this.name = name;
};
CleanerRobot.prototype.clean = function () {
  const killedWho = (Math.random() * 10) % 2 === 0 ? "Dog" : "Cat";
  console.log(`${this.name} cleaned a ${killedWho}'s poop`);
};
util.inherits(CleanerRobot, Robot);

const Animal = function () {};
Animal.prototype.poop = function () {
  console.log(`${this.name} pooped!`);
};

const Dog = function (name) {
  this.name = name;
};
Dog.prototype.bark = function () {
  console.log(`${this.name} barked!`);
};
util.inherits(Dog, Animal);

const Cat = function (name) {
  this.name = name;
};
Cat.prototype.meows = function () {
  console.log(`${this.name} meowed!`);
};
util.inherits(Cat, Animal);

/* Composition */
// const bark = function (state) {
//   console.log(`${state.name} barked!`);
// };
// const meows = function (state) {
//   console.log(`${state.name} meowed!`);
// };
// const poop = function (state) {
//   console.log(`${state.name} pooped!`);
// };
const clean = function () {
  const killedWho = (Math.random() * 10) % 2 === 0 ? "Dog" : "Cat";
  console.log(`${this.name} cleaned a ${killedWho}'s poop`);
};
const kill = function () {
  const killedWho = (Math.random() * 10) % 2 === 0 ? "Dog" : "Cat";
  console.log(`${this.name} killed a ${killedWho}`);
};
const drive = function () {
  console.log(`${this.name} is driving!`);
};
const MurderCleanRobot = function (name) {
  this.name = name;
};
MurderCleanRobot.prototype.kill = kill;
MurderCleanRobot.prototype.drive = drive;
MurderCleanRobot.prototype.clean = clean;

const rocco = new Dog("Rocco");
const kite = new Cat("Kite");
const mayor = new MurderRobot("Mayor");
const eugene = new CleanerRobot("Eugene");
const arden = new MurderCleanRobot("Arden");
rocco.bark();
rocco.poop();
kite.meows();
kite.poop();
eugene.drive();
eugene.clean();
mayor.drive();
mayor.kill();
arden.drive();
arden.clean();
arden.kill();
