const balancedString = require('../../../02-BalancedString.js');

// Convert command line arguments to numbers
let input = process.argv[2];
console.log(balancedString(input));