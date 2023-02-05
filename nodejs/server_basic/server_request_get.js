var http = require('http');
// 1. 요청한 url을 객체로 만들기 위해 url 모듈사용
var url = require('url');
// 2. 요청한 url 중에 Query String 을 객체로 만들기 위해 querystring 모듈 사용
var querystring = require('querystring');
var server = http.createServer(function(request,response){

    console.log('--- log start ---');

    var parsedUrl = url.parse(request.url);
    console.log(parsedUrl);

    var parasedQuery = querystring.parse(parsedUrl.query,'&','=');
    console.log(parasedQuery);

    console.log('--- log end ---');

    response.writeHead(200, {'Content-Type':'text/html'});
    response.end('var1의 값은 '+parasedQuery.var1);
});

server.listen(8080, function(){
    console.log('Server is running...');
});