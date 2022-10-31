function Animal(name) {
    this.name = name;
}

function Cat(name) {
    Animal.call(this, name)
    this.sound = "Miao"
}
function Dog(name) {
    Animal.call(this, name)
    this.sound = "Woof"
}

Animal.prototype.greet = function () {
    return `${this.sound}! My name is ${this.name}.`;
};


Cat.prototype = new Animal();
Dog.prototype = new Animal();

let snoopy = new Dog("Snoopy");
let tom = new Cat("Tom");
let garfield = new Cat("Garfield");

console.assert(snoopy.greet() == "Woof! My name is Snoopy.");
console.assert(tom.greet() == "Miao! My name is Tom.");
console.assert(garfield.greet() == "Miao! My name is Garfield.");
