module.exports = app => {
    const express = require('express');
    const router = express.Router();
    
    router.get('/', (req, res) => {
        console.log('in login process');

        res.sendFile('http://localhost:3000/public/login/login.html');
    });
    
    // login 로직 처리
    router.post('/process', (req, res) => {
        console.log('in login process');
    
        const id = req.body.id;
        const password = req.body.password;

        res.send(`<h1>ID : ${id}, PASSWORD : ${password} </h1>`);
        res.end();
    });
    
    return router;
};