module.exports = app => {
    const express = require('express');
    const router = express.Router();
    const path = require('path');
    
    router.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/login', 'login.html'));
    });
    
    router.post('/process', (req, res) => {
        const id = req.body.id;
        const password = req.body.password;

        if(req.session.user) {
            res.redirect('/product');
        } else { 
            req.session.user = {
                id: id, 
                name: 'Nam Won Hyung', 
                authorized: true
            };
        }

        res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
        res.write('<h1>로그인성공<h1>');
        res.write(`<h1>ID : ${id}, PASSWORD : ${password} </h1>`);
        res.write('<h1><a href="/product">상품페이지로 이동하기</a><h1>');
        res.write('<h1><a href="/login/logout">로그아웃</a><h1>');
        res.end();
    });
    
    router.get('/logout', (req, res) => {
        req.session.destroy(err => {
            res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
            res.write('<script>alert("로그아웃되었습니다.")</script>');
            res.end();
        })
    });
    
    return router;
};