require("amd-loader");

// early version
const Module = (function () {
    let _privateVariable = 1

    const _privateMethod = function () {
        console.log('this is private method')
        _privateVariable += 1
    };

    const publicMethod = function () {
        console.log('this is public method')
        _privateMethod()
        console.log(_privateVariable)
    };
    return {
      publicMethod: publicMethod,
    }
})();

Module.publicMethod()


// commonJS module
const commonJSModule = require('./common-module')

const phrase = commonJSModule.sayHello('en');
console.log(phrase);


// amd module
define(['./amd-module'], function(greeting) {
    const phrase = greeting.sayHello('en');
    console.log(phrase)
});