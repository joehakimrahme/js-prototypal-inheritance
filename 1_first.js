// Creating objects with object literal {}

let snoopy = { greet: () => "Woof! My name is Snoopy." };
let tom = { greet: () => "Miao! My name is Tom." };
let garfield = { greet: () => "Miao! My name is Garfield." };

console.assert(snoopy.greet() == "Woof! My name is Snoopy.");
console.assert(tom.greet() == "Miao! My name is Tom.");
console.assert(garfield.greet() == "Miao! My name is Garfield.");
