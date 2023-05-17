const http = require("http");
const fs = require("fs");
require("dotenv").config();

const PORT = process.env.PORT || 3333;

const folder = process.argv[2];

const server = http.createServer((req, res) => {
  fs.readdir(folder, (err, files) => {
    if (err) {
      console.log(`Erro: ${err}`);
    } else {
      res.writeHead(200, { "Content-Type": "text/plain;charset=utf-8" });
      files.forEach((file) => res.write(`${file}\n`));
      res.end("Fim");
    }
  });
});

server.listen(PORT, () => {
  console.log(`Rodando na porta ${PORT}`);
});
