module.exports = app => {
    const express = require('express');
    const router = express.Router();
    
    router.get('/', (req, res) => {
        console.log('in cookie!!!');

        res.send('<a href="/cookie/save">쿠키 만들자</a>');
    });
    
    router.get('/save', (req, res) => {
        console.log('in cookie save');

        res.cookie('user', {
            id: 'Nam',
            name: 'Nam Won Hyung',
            authorized: true
        });
        res.redirect('/cookie/show');
    });
    
    router.get('/show', (req, res) => {
        console.log('in cookie show');
    
        res.send(req.cookies.user);
    });
    
    return router;
};