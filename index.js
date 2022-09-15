const http = require("http");
const fs = require("fs");

const port = 8080;
const hostname = "127.0.0.1";

const welcome = "Welcome to my basic node page";

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      fs.readFile("index.html", function (err, data) {
        if (err) throw err;
        res.writeHead(200, {
          "Content-Type": "text/html",
          "Content-Length": data.length,
        });
        res.write(data);
        res.end();
      });
      break;
    case "/about.html":
      fs.readFile("about.html", function (err, data) {
        if (err) throw err;
        res.writeHead(200, {
          "Content-Type": "text/html",
          "Content-Length": data.length,
        });
        res.write(data);
        res.end();
      });
      break;
    case "/contact-me.html":
      fs.readFile("contact-me.html", function (err, data) {
        if (err) throw err;
        res.writeHead(200, {
          "Content-Type": "text/html",
          "Content-Length": data.length,
        });
        res.write(data);
        res.end();
      });
      break;
    default:
      fs.readFile("404.html", function (err, data) {
        if (err) throw err;
        res.writeHead(200, {
          "Content-Type": "text/html",
          "Content-Length": data.length,
        });
        res.write(data);
        res.end();
      });
      break;
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
