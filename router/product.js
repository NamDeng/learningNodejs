module.exports = app => {
    const express = require('express');
    const router = express.Router();
    
    router.get('/', (req, res) => {
        if(!req.session.user) res.redirect('/login');

        const productList = {
            1: '간장게장',
            2: '5kg 아령',
            3: '돼지고기',
            4: '소고기',
            5: '양념게장',
            6: '맥북 Pro'
        };
        const requestData = {
            title: `${req.session.user.id}님 안녕하세요.`,
            content: productList
        };
        req.app.render('product', requestData, (err, html) => {
            res.end(html);
        });
    });
    
    return router;
};