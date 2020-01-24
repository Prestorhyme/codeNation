//it's a core module, therefore does not need a file path nor npm as it is in included in node 
const path = require ('path');

//base file name
console.log(path.basename(__filename));

//Directory name 
console.log(path.dirname(__filename));

//filename
console.log(path.extname(__filename));

//create path object
console.log(path.parse(__filename).base);

//concatenate paths
console.log(path.join(__dirname, 'test', 'hello.html'));