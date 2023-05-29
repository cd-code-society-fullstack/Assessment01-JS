const makeTags = require('../../../03-MakeTags.js');

// Convert command line arguments to numbers
let input1 = process.argv[2];
let input2 = process.argv[3];
console.log(makeTags(input1, input2)); // Expected output: "<i>Yay</i>"