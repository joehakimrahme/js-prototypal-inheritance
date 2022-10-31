function greet_global() {
    return `${this.sound}! My name is ${this.name}.`;
};

function Cat(name) {
    this.name = name
    this.sound = "Miao"
}
function Dog(name) {
    this.name = name
    this.sound = "Woof"
}

Cat.prototype.greet = greet_global;
Dog.prototype.greet = greet_global;


let snoopy = new Dog("Snoopy");
let tom = new Cat("Tom");
let garfield = new Cat("Garfield");

console.assert(snoopy.greet() == "Woof! My name is Snoopy.");
console.assert(tom.greet() == "Miao! My name is Tom.");
console.assert(garfield.greet() == "Miao! My name is Garfield.");
