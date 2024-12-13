// importação da biblioteca Express
// para instalar rode o comando : npm install express
const express = require ('express');
const bodyParser = require ('body-parser');

// Criação de um app Express
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//importação das rotas
const rotas = require('./routes/imc');

// método GET na rota raís
app.get("/", (req, res) => {
    res.send('Essa é a Página raiz.');
});

// configuração do server
const port = 9090;
const hostname = '127.0.0.1';

// utilizar a rota imc
app.use('/imc', rotas);

// rodar a aplicação
app.listen(port, hostname, console.log(`O servidor está rodando!... \nLink: http://${hostname}:${port}/`));