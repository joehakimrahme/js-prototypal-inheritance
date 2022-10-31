// "this" is referring to the created object.
// "this.sound" and "this.name" are referring to the "sound" and "name" properties of the objects
// that are being created.

function greet_global() {
  return `${this.sound}! My name is ${this.name}.`;
}

// Here "this" is referring to snoppy
let snoopy = { name: "Snoopy", sound: "Woof", greet: greet_global };
// Here "this" is referring to tom
let tom = { name: "Tom", sound: "Miao", greet: greet_global };
// Here "this" is referring to garfield
let garfield = { name: "Garfield", sound: "Miao", greet: greet_global };

console.assert(snoopy.greet() == "Woof! My name is Snoopy.");
console.assert(tom.greet() == "Miao! My name is Tom.");
console.assert(garfield.greet() == "Miao! My name is Garfield.");
