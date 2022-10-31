// Creating Objects using a Constructor Function and the new Keyword
// Also we can see here how we stored a function inside of the contructor's prototype.

function Animal(name, sound) {
  this.name = name;
  this.sound = sound;
}

Animal.prototype.greet = function () {
  return `${this.sound}! My name is ${this.name}.`;
};

let snoopy = new Animal("Snoopy", "Woof");
let tom = new Animal("Tom", "Miao");
let garfield = new Animal("Garfield", "Miao");

console.assert(snoopy.greet() == "Woof! My name is Snoopy.");
console.assert(tom.greet() == "Miao! My name is Tom.");
console.assert(garfield.greet() == "Miao! My name is Garfield.");
