const http = require('http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();

app.set('port', 3000);

// static 미들웨어 지정 - 외부에서 정적 파일에 바로 접근 가능

// body-parser 미들 웨어 지정 - post 방식 처리용
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

router.route('/process/login').post(req, res) => {
    console.log('in login process');
    
    const id = req.body.id;
    const password = req.body.password;
    
    res.send(`<h1>ID : ${id}, PASSWORD : ${password} </h1>`);
    res.end();
});

const server = http.createServer(app);
server.listen(app.get('port'), () => {
    console.log('http://localhost:%d', app.get('port'));
});