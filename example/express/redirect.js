const http = require('http');
const express = require('express');
const app = express();

app.set('port', 3000);
app.use(express.static('public'))
app.use((req, res, next) => {
    
    res.redirect('http://www.naver.com');
})

const server = http.createServer(app);
server.listen(app.get('port'), () => {
    console.log('http://localhost:%d', app.get('port'));
});