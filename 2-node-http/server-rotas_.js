// Exemplo de código de  que manipula rotas do usuário

const http = require('http');

// Definição de parametros do servidor
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type' : 'text/html; charset=utf-8' });
    const url = req.url;

    //manipulação da url
    if(url === '/') {
        res.write("Você acessou a raiz desse site.");
    } else if (url === '/aquidauana') {
        res.write('Você acessou o campus Aquidauana.');
    } else {
        res.write('Página não encontrada.');
    }

    res.end();
});

// Executar o servidor
server.listen(
    port, // porta de acesso ao servidor
    hostname, // endereço IP do servidor
    console.log('O servidor está rodando...') // mensagem no terminal 
);


