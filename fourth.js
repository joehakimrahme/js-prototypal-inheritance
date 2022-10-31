function Animal(name, sound) {
    return {
	name: name,
	sound: sound,
	greet: function () {return `${this.sound}! My name is ${this.name}.`},
    }
}

let snoopy = Animal("Snoopy", "Woof");
let tom = Animal("Tom", "Miao");
let garfield = Animal("Garfield", "Miao");

console.assert(snoopy.greet() == "Woof! My name is Snoopy.");
console.assert(tom.greet() == "Miao! My name is Tom.");
console.assert(garfield.greet() == "Miao! My name is Garfield.");
