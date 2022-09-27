import { createServer } from "node:http";

const server = createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<h1>Hello world</h1>");
  res.end();
});

server.listen(0, function () {
  console.log(`Application running on: http://localhost:${this.address().port}`);
});
