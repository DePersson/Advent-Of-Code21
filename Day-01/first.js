const fs = require ('fs');

// Read file
const data = fs.readFileSync('input.txt', 'utf-8')
	.trim()
	.split('\n')
	.map((line) => Number(line));

let counter = 0;

for (var i =1; i <= data.length-1; i++) {
	if(data[i]>data[i-1]){
		counter = counter + 1;
	}
}

console.log("Counter: ", counter);