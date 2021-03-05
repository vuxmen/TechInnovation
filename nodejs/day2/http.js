// var http = require("http");

// http.createServer(
//     (request, response) => {
//         response.writeHead(200, {"Content-Type": "text/plain"});
//         response.write("Im vuxmen");
//         response.end();
//     }
// ).listen(8888);


// Another way to express this code in NodeJS (common way)

var http = require("http");

const onResponse = (request, response) => {
    // console.log(request.method, response.url);
    response.writeHead(200, {"Content-Type": "text/plain"});
    // response.write("Newbie at NodeJS");
    // response.end();
    if (request.url == '/hello') response.end('hello');
    else if (request.url === '/xinchao') response.end('/xin chao');
    else response.end('Create HTTP module');
}

http.createServer(onResponse).listen(8888);