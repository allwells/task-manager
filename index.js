const http = require("http");

const app = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("Welcome to Task Manager backend api");
});

const PORT = 3001;

app.listen(PORT);

console.log(`Server runnint on port ${PORT}`);
