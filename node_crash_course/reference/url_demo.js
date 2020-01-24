const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

//serialized url
console.log(myUrl.href);
//or
console.log(myUrl.toString());

//host (root domain)
console.log(myUrl.host);
//or
//hostname (doeds not get port)
console.log(myUrl.hostname); 

//pathname
console.log(myUrl.pathname);

//serialized query
console.log(myUrl.search);

//params object
console.log(myUrl.searchParams);