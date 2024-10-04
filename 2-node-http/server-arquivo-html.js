// Exemplo de servidor que responde com um código html.

//importações
const http = require('http');
const fs = require('fs'); // módulo para abrir arquivos.... Manipular arquivos

//parametros server
const localhost = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type' : 'text/html; charset= utf-8' });

    //carregar o arquivo html para uma constante
    const arquivoHTML = fs.readFileSync("./index.html")

    //responde com o arquivo html
    res.end(arquivoHTML);
});

server.listen(port, localhost, console.log('Servidor Rodando...'));