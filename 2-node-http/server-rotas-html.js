const http = require('http');
const fs = require('fs');

// Definição de parametros do servidor
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    const url = req.url;

    //carregar o arquivo html para uma constante
    const sobre = fs.readFileSync("./pages-html-rotas/sobre.html");
    const contato = fs.readFileSync("./pages-html-rotas/contato.html");
    const cadastro = fs.readFileSync("./pages-html-rotas/cadastro.html");

    const data = {
        id: {
            1: 'alguem',
            2: 'alguem',
            3: 'alguem'
        },
        cpf: {
            1: '12345678911',
            2: '12345678911',
            3: '12345678911'
        }
    };

    //manipulação da url
    if(url === '/') {
        res.writeHead(200, { 'Content-Type' : 'text/html; charset=utf-8' });
        res.write('Você acessou a <b>raiz</b> desse site.<br> ACESSE: {contato, sobre, cadastro, data}');
        res.end();
       

    } else if (url === '/contato') {
        res.writeHead(200, { 'Content-Type' : 'text/html; charset=utf-8' });
        res.write(contato);
        res.end();

    } else if (url === '/sobre') {
        res.writeHead(200, { 'Content-Type' : 'text/html; charset=utf-8' });
        res.write(sobre);
        res.end();

    } else if (url === '/cadastro') {
        res.writeHead(200, { 'Content-Type' : 'text/html; charset=utf-8' });
        res.write(cadastro);
        res.end();

    } else if (url === '/data') {
        res.writeHead(200, { 'Content-Type' : 'application/json; charset=utf-8' });
        res.end(JSON.stringify(data));

    } else {
        res.writeHead(404, { 'Content-Type' : 'text/plain; charset=utf-8' });
        res.write('Página não existe.');
        res.end();
    }

});

// Executar o servidor
server.listen(
    port, // porta de acesso ao servidor
    hostname, // endereço IP do servidor
    console.log('O servidor está rodando...') // mensagem no terminal 
);


