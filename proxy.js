const proxy = require('express-http-proxy');
const app = require('express')();
const port = 8080;

app.use('/', proxy(selectProxyHost));
//app.use('/', proxy('127.0.0.1:3001'));

app.listen(port, function() {
    console.log('Example app listening on port ' + port + '!');
});

function selectProxyHost(req) {
    console.log(req.url);
    let host;
    if(req.url == '/information') {
        host = '127.0.0.1:3002';
    } else {
        host = '127.0.0.1:3001';
    }
    return host;
}
