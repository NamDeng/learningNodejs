module.exports = db => {
    
    const express = require('express');
    const router = express.Router();
    const path = require('path');
    
    router.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/login', 'login.html'));
    });
    
    router.post('/process', (req, res) => {
        const id = req.body.id;
        const password = req.body.password;
        if(req.session.user && req.session.user.id === id) {
            res.cookie('login', {result : 'SUCCESS'});
            res.redirect('/product');
        } else {
            db.collection('User').findOne({id: id}, (err, user) => {
                if(!user) {
                    res.cookie('login', {result : 'NOT_EXISTS_USER'});
                    res.redirect('/login');
                } else {
                    console.log(`login success. id : ${id}`);

                    if(user.password === password) {
                    console.log('로그인 성공');
                    req.session.user = {
                        id: id, 
                        name: id, 
                        authorized: true
                    };

                    res.cookie('login', {result : 'SUCCESS'});
                    res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
                    res.write('<h1>로그인성공<h1>');
                    res.write('<h1><a href="/product">상품페이지로 이동하기</a><h1>');
                    res.write('<h1><a href="/login/logout">로그아웃</a><h1>');
                    res.end();

                    } else {
                        res.cookie('login', {result : 'INVALID_PASSWORD'});
                        res.redirect('/login');
                    }
                }
            });
        }
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