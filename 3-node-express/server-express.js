// importação da biblioteca Express
// para instalar rode o comando : npm install express
const express = require ('express');

const bodyParser = require ('body-parser');

// Criação de um app Express
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//importação das rotas
const estudanteRotas = require('./routes/Estudante');
const docenteRotas = require('./routes/Docente');

// Config do server
const port = 3000;
const hostname = '127.0.0.1';

app.get('/', (req, res) => {
    res.send('Está é a raiz do Servidor.')
})


// Utilizar as rotas
app.use('/estudante', estudanteRotas);
app.use('/docente', docenteRotas);



//Rodar a aplicação
app.listen(port, hostname, console.log('Servidor rodando...'));