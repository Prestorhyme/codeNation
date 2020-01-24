const fs = require('fs');

const book = {
    title: "Harry potter",
    author: "J K Rowling"
}

const bookJSON = JSON.stringify(book);
console.log(book);
console.log(bookJSON);

// const bookPars d = JSON.parse(bookJSON);
// console.log(bookParsed);
// console.log(bookParsed.title);
// console.log(bookParsed.author);

fs.writeFileSync('myBooks.json', bookJSON);
const dataBuffer = fs.readFileSync('myBooks.JSON');
const data = dataBuffer.toString();
console.log(dataBuffer);
console.log(data);

const parseData = JSON.parse(data);
console.log(parseData);