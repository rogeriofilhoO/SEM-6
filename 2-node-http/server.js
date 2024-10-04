// Importando o módulo http
const http = require('http');
const url = require('url');

// Definição de parametros do servidor
const hostname = '127.0.0.1';
const port = 3000;

// Configuração inicial do servidor HTTP    
const server = http.createServer((req, res) => {
    res.statusCode = 200; // status ok
    res.setHeader('Content-Type', 'text/plan; charset=utf-8'); // tipo do conteúdo

    let q = url.parse(req.url, true).query; // consultando a string da url

    // Montagem da mensagem de retorno (template string)
    let txt = `
        Nome ${q.p1}
        Sobrenome: ${q.p2}
    `;

    res.write(txt);
    // Concatenar na url é "&"

    //res.write(txt); // mensagem no <body> da página
    //res.write('Olá! Este é um servidor HTTP e está rodando localmente.');
    res.end(); // final da resposta
});

// Executar o servidor
server.listen(
    port, // porta de acesso ao servidor
    hostname, // endereço IP do servidor
    console.log('O servidor está rodando...') // mensagem no terminal 
);


