const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to the new Server!');
  } else if (url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('This is a simple http Node.js server');
  } else if (url === '/contact') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Contact us at contact@newserver.com');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page not found!');
  }
});

server.listen(5000, () => {
  console.log('Server is listening on port 5000...');
});