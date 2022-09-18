import http from 'node:http';

const port = process.env.PORT || 4000;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    console.log(req.url);

    if (req.url == '/') {
        res.statusCode = 200;
        res.end('<h1>Learning Backend With Node.JS</h1>');
    }
    else if (req.url == '/index.html') {
        res.statusCode = 200;
        res.end('<h1>About Page</h1>');
    }
    else if (req.url == '/about') {
        res.statusCode = 200;
        res.end('<h1>About Page</h1>');
    }
    else {
        res.statusCode = 404;
        res.end('<h1>This Page Not Found In Server!</h1>');
    }
});

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});