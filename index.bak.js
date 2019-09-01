import http from 'http';
import httpProxy from 'http-proxy';

// httpProxy.createProxyServer({ target: 'http://localhost:8080' }).listen(9001); // See (†)
httpProxy.createProxyServer({ target: 'http://localhost:4000' }).listen(9002)

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('request successfully proxied!' + '\n' + JSON.stringify(req.headers, true, 2));
    res.end();
}).listen(9002);