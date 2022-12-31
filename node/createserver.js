const http  = require("http");
const server = http.createServer((req,res) => {
    res.write("hello sajal in node js");
    res.end();
});

server.listen(3000);



//other task 

const http  = require("http");
const server = http.createServer((req,res) => {
    res.writeHead(200, {"content_type": "application/json"});
    res.end(
        JSON.stringify(
            {
                data:"hello sajal"
            }
        )
    );
});

server.listen(3000);