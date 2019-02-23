const http = require('http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.set('port', 3000);
app.set('loginPage', path.join(__dirname, '/public/login'));

// static 미들웨어 지정 - 외부에서 정적 파일에 바로 접근 가능
app.use('/public', express.static(path.join(__dirname, '/public')));

// body-parser 미들 웨어 지정 - post 방식 처리용
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const loginRouter = require('./router/login.js')(app);
app.use('/login', loginRouter);

const calcRouter = require('./router/calc.js')(app);
app.use('/calc', calcRouter);

const server = http.createServer(app);
server.listen(app.get('port'), () => {
    console.log(`http://localhost:${app.get('port')}`);
});