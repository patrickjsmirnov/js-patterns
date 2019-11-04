let singleton = Symbol();
let singletonEnforcer = Symbol();

class Singleton {

  constructor(enforcer) {
    if (enforcer !== singletonEnforcer)
       throw "Instantiation failed: use Singleton.getInstance() instead of new.";
    
    this.field = 123
  }

  static get instance() {
    if (!this[singleton])
        this[singleton] = new Singleton(singletonEnforcer);
    return this[singleton];
  }
  
  static set instance(v) { throw "Can't change constant property!" }
}

let obj1 = Singleton.instance;
let obj2 = Singleton.instance;

console.log('obj1 === obj2:',  obj1 === obj2 );
console.log(Singleton.instance)