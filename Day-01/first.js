const fs = require ('fs');

// Read file
var measurments = fs.readFileSync('input.txt', 'utf8').split('/n');

// Loop array and count the number of times it increases
