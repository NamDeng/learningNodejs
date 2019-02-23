const http = require('http');
const express = require('express');
const app = express();

app.set('port', 3000);
app.use(express.static('public'))
app.use((req, res, next) => {
    const resData = {
        name: '유인나',
        message: 'Hello'
    };

    res.send(resData);
})

const server = http.createServer(app);
server.listen(app.get('port'), () => {
    console.log('http://localhost:%d', app.get('port'));
});