// Using a function to avoid repetition.

function greet_global(sound, name) {
  return `${sound}! My name is ${name}.`;
}

let snoopy = { greet: () => greet_global("Woof", "Snoopy") };
let tom = { greet: () => greet_global("Miao", "Tom") };
let garfield = { greet: () => greet_global("Miao", "Garfield") };

console.assert(snoopy.greet() == "Woof! My name is Snoopy.");
console.assert(tom.greet() == "Miao! My name is Tom.");
console.assert(garfield.greet() == "Miao! My name is Garfield.");
