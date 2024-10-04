// Exemplo de servidor que responde com um código html.

//importações
const http = require('http');

//parametros server
const localhost = '127.0.0.1';
const port = 3000;


const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type' : 'text/html; charset= utf-8' });
    res.write(`<h1> Titulo de nível um </h1>`);

    res.end();
});

server.listen(port, localhost, console.log('Servidor Rodando...'));