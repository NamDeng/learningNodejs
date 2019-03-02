const http = require('http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const cors = require('cors');
const expressSession = require('express-session');
const mongodb = require('mongodb');
const MongoClient = require('mongodb').MongoClient;

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

let db;
const server = http.createServer(app);
MongoClient.connect("mongodb://localhost:27017/local", (err, database) => {
    if(err) throw err;

    db = database.db('local');

    // Start the application after the database connection is ready
    server.listen(app.get('port'), () => {
        console.log(`http://localhost:${app.get('port')}`);
    });
    
    const loginRouter = require('./router/login.js')(db);
    app.use('/login', loginRouter);

    const calcRouter = require('./router/calc.js')(db);
    app.use('/calc', calcRouter);

    const cookieRouter = require('./router/cookie.js')(db);
    app.use('/cookie', cookieRouter);

    const productRouter = require('./router/product.js')(db);
    app.use('/product', productRouter);

    const uploadRouter = require('./router/upload.js')(db);
    app.use('/upload', uploadRouter);
});



