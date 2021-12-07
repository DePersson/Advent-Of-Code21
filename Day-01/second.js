const fs = require ('fs');

// Read file
const data = fs.readFileSync('input.txt', 'utf-8')
	.trim()
	.split('\n')
	.map((line) => Number(line));

let counter = 0;
let win = data[i] + data[i+1] + data[i+2]
for (var i =1; i <= data.length-3; i++) {
	let sum = data[i] + data[i+1] + data[i+2]
	if(sum > win){
		counter = counter + 1;
	}
	win = sum;
}

console.log("Counter: ", counter);