const http = require('http');

const server = http.createServer((req, res) => {
  console.log("Dharm");
  res.end("Hello from the Dharm!");
});

const port = 4000;

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
