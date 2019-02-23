const http = require('http');
const express = require('express');
const app = express();

app.set('port', 3000);
app.use('/public', express.static(__dirname + '/public'));
app.use((req, res, next) => {
    console.log('요청 헤더 파라미터 확인');
    
    const userAgent = req.header('User-Agent');
    const name = req.param('name');
    const age = req.param('age');
    
    res.writeHead(200, {'Content-Type': 'text/html;charset=utf8'});
    res.write(`<h2>userAgent : ${userAgent}`);
    res.write(`<h2>name : ${name}`);
    res.write(`<h2>age : ${age}`);
    next();
});

app.use((req, res, next) => {
    console.log('두번째 미들웨어');
    
    res.end();
});

const server = http.createServer(app);
server.listen(app.get('port'), () => {
    console.log('http://localhost:%d', app.get('port'));
});