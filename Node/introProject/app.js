// why Node?

const fs = require('fs');

fs.writeFileSync('ua92.text', 'Telmo is off, long live telmo.');

//http
//as
//path
//https
//fs

const http = require('http');
//we have imported a global module here
//this is signified by a lack of ./in the path
//if we see ./ it is local 

//this is the worst way to create a requestlistener. DO NOT DO!!!
// function requestListener(req, res) {
//     //something in here...
// }

// http.createServer(requestListener);

//anon function
http.createServer(function(req,res){
    //something in here...
})

const server = http.createServer((req, res) => {
    console.log("hello, UA92.")

    res.write('<html')
    res.write('<head><title>My title</title></head>')
    res.write('<body><h1>Hello there</h1></body>')
    res.write('</html>')

    res.end();
    
})

server.listen(3000);