function greet_global() { return `${this.sound}! My name is ${this.name}.` }

let snoopy = { name: "Snoopy", sound: "Woof", greet: greet_global };
let tom = { name: "Tom", sound: "Miao", greet: greet_global };
let garfield = { name: "Garfield", sound: "Miao", greet: greet_global };

console.assert(snoopy.greet() == "Woof! My name is Snoopy.");
console.assert(tom.greet() == "Miao! My name is Tom.");
console.assert(garfield.greet() == "Miao! My name is Garfield.");
