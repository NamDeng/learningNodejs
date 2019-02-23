module.exports = app => {
    const express = require('express');
    const router = express.Router();
    
    router.get('/', (req, res) => {
        res.redirect('http://127.0.0.1:3000/public/calc/calc.html');
    });
    
    router.get('/plus/:x/:y', (req, res) => {
        const x = req.params.x;
        const y = req.params.y;
        const sum = parseInt(x) + parseInt(y);
        res.send(`<h1>더하기 연산 결과 ${x} + ${y} = ${sum} </h1>`);
        res.end();
    });
    
    router.get('/minus/:x/:y', (req, res) => {
        const x = req.params.x;
        const y = req.params.y;
        const minus = parseInt(x) - parseInt(y);
        res.send(`<h1>더하기 연산 결과 ${x} - ${y} = ${minus} </h1>`);
        res.end();
    });
    
    router.get('/mul/:x/:y', (req, res) => {
        const x = req.params.x;
        const y = req.params.y;
        const mul = parseInt(x) * parseInt(y);
        res.send(`<h1>더하기 연산 결과 ${x} * ${y} = ${mul} </h1>`);
        res.end();
    });
    
    router.get('/div/:x/:y', (req, res) => {
        const x = req.params.x;
        const y = req.params.y;
        const div = parseInt(x) / parseInt(y);
        res.send(`<h1>더하기 연산 결과 ${x} / ${y} = ${div} </h1>`);
        res.end();
    });
    
    return router;
};