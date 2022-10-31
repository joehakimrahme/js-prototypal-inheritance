// Factory Function

// animal is returning an object that has 3 properties.
function animal(name, sound) {
  return {
    name,
    sound,
    greet() {
      return `${this.sound}! My name is ${this.name}.`;
    },
  };
}

// Another way to write it would have been :

function animals(name, sound) {
  return {
    greet() {
      return `${sound}! My name is ${name}.`;
    },
  };
}

// Here closure allows me to still access name and sound even after animals("Snoopy","Woof")
// has finished executing.

let snoopy = animal("Snoopy", "Woof");
let tom = animal("Tom", "Miao");
let garfield = animal("Garfield", "Miao");

console.assert(snoopy.greet() == "Woof! My name is Snoopy.");
console.assert(tom.greet() == "Miao! My name is Tom.");
console.assert(garfield.greet() == "Miao! My name is Garfield.");
