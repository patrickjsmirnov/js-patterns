function Singleton() {
    if (Singleton.instance) return Singleton.instance;

    this.field = 123;

    this.log = function() {
        console.log(`log: ${this.field}`);
    };

    this.set = function(value) {
        this.field = value
        this.log()
    };

    return Singleton.instance = this;
}

const obj1 = new Singleton;
const obj2 = new Singleton;

obj1.log()

console.log(obj1 === obj2)

obj1.set(456)

console.log(obj1 === obj2)

console.log(Singleton.instance)