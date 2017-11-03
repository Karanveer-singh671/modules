var module = require('../module');

var reZero = module.willReturn0;
var rand = module.rand;


var rand1 = rand(); // need this line to call function to store true in rand1
console.log(rand1);