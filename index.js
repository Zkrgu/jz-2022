const http = require('http');
const port = process.env.port || 3000;

http.createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/plain' });
	res.end('Hello World!');
}).listen(port);

console.log(`Server running at https://localhost:${port}`);
