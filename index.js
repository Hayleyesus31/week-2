// Import the HTTP module
const http = require('http');

// Create a server
const server = http.createServer((req, res) => {
  // Get the request URL
  const url = req.url;

  // Respond with a different message depending on the URL
  if (url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>Hello, world!</h1>');
    res.end();
  } else if (url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>About me</h1>');
    res.write('<p>My name is Bard and I am a large language model from Google AI.</p>');
    res.end();
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.write('<h1>404 Page not found</h1>');
    res.end();
  }
});

// Start the server
server.listen(3000, () => {
  console.log('Server is running on port 3000');
});

