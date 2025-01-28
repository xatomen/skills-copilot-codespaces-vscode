// Create a web server
const http = require('http');
const fs = require('fs');

// Create a server object
http.createServer((req, res) => {
  // If the URL is /, read the index.html file
  if (req.url === '/') {
    fs.readFile('index.html', (err, data) => {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      return res.end();
    });
  }

  // If the URL is /comments, read the comments.json file
  if (req.url === '/comments') {
    fs.readFile('comments.json', (err, data) => {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.write(data);
      return res.end();
    });
  }
}).listen(8080); // Server object listens on port 8080