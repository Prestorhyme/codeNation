// how to create a file
const fs = require('fs');

fs.writeFileSync('names.txt', 'Hello, my name is Conor')

fs. appendFileSync('names.txt', ' and I live in Middleton')

// /n would make a new line in the txt file, so the statements are seperated 

const dataBuffer = fs.readFileSync('names.txt');
const data = dataBuffer.toString();
console.log(data);