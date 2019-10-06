

// es modules
// usage node --experimental-modules  module.mjs

import { greeting } from "./es-module.mjs";

const phrase = greeting.sayHello("ru");
console.log(phrase)