
// function constructor
function Laptop(model, year, os) {
    this.model = model;
    this.year = year;
    this.os = os;

    // This isn't optimal as the function should ideally be shared between all of the instances
    // this.toString = function () {
    //     return this.model + " has done " + this.miles + " miles";
    // };
}

// this is great
Laptop.prototype.toString = function () {
    return `Model: ${this.model}, Year: ${this.year}, OS: ${this.os}`
};
   

const macbook = new Laptop( "Macbook Pro 15", 2015, 'macOS');
const thinkPad = new Laptop( "LENOVO ThinkPad X1 Carbon", 2019, 'Windows 10');
   
console.log(macbook);
console.log(thinkPad);
console.log(macbook.os);
console.log(macbook.toString());
console.log(thinkPad.toString());

// ES6
class LaptopClass {
    constructor (model, year, os) {
      this.model = model
      this.year = year
      this.os = os
    }

    toString() {
        return `Model: ${this.model}, Year: ${this.year}, OS: ${this.os}`
    }
}

const hp = new LaptopClass( "HP EliteBook x360 1030 G2", 2019, 'Windows 10');

console.log(hp)
console.log(hp.model)
console.log(hp.toString())