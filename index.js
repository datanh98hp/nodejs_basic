const http = require('http');


function dataControl (req, resp){
    resp.write("<h1>Hello ...........</h1>")
    resp.end();
}
// 
http.createServer(dataControl).listen(45005)

