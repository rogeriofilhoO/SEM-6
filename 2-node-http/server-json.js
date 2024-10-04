//importações
const http = require('http');

//parametros server
const localhost = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {

    //objeto json
    const pessoa = {
        primeiroNome: 'Joaquim',
        ultimoNome: 'silva',
        email: 'joaquim@email.com.br',
        telefone: '111111111'
    }

    res.writeHead(200, { 'Content-Type' : 'application/json ; charset= utf-8' });

    res.end(JSON.stringify(pessoa));
});

server.listen(port, localhost, console.log('Servidor Rodando...'));