const express = require('express');

const port = 3000;
const hostname = '127.0.0.1';

const app = express();

app.get('/', (req, res) => {
    res.send("Você acessou a página Raiz.");
});

app.post('/save', (req, res) => {
    res.send("Dados Salvos.");
});

app.put('/update', (req, res) => {
    res.send("Dados Atualizados.");
});

app.delete('/delete', (req, res) => {
    res.send("Dados Deletados.");
});

app.listen(port, hostname, console.log('Servidor Rodando....'));