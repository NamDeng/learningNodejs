const http = require('http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const cors = require('cors');
const expressSession = require('express-session');

// port 설정
app.set('port', 3000);

// ejs template 설정
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// static 미들웨어 지정 - 외부에서 정적 파일에 바로 접근 가능
app.use('/public', express.static(path.join(__dirname, '/public')));
app.use('/upload', express.static(path.join(__dirname, '/upload')));

// cros 설정
app.use(cors());

// body-parser 미들 웨어 지정 - post 방식 처리용
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// cookie, session 처리용
app.use(cookieParser());
app.use(expressSession({
    secret: 'nam',
    resave: true,
    saveUninitialized: true
}));

const loginRouter = require('./router/login.js')(app);
app.use('/login', loginRouter);

const calcRouter = require('./router/calc.js')(app);
app.use('/calc', calcRouter);

const cookieRouter = require('./router/cookie.js')(app);
app.use('/cookie', cookieRouter);

const productRouter = require('./router/product.js')(app);
app.use('/product', productRouter);

const uploadRouter = require('./router/upload.js')(app);
app.use('/upload', uploadRouter);

const server = http.createServer(app);
server.listen(app.get('port'), () => {
    console.log(`http://localhost:${app.get('port')}`);
});