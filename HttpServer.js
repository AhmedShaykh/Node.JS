import http from 'node:http';

const port = process.env.PORT || 4000;

const server = http.createServer((req, res) => {
    console.log(req.url);

    res.writeHead(201, { "Content-Type": "text/html" });
    res.end('<h1>Learning Backend With Node.JS!</h1>');
});

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});