// importação da biblioteca Express
const express = require ('express');

// Criação de um app Express
const app = express();

// Config do server
const port = 3000;
const hostname = '127.0.0.1'; 


// Rota raiz da aplicação
app.get('/', (req, res) => {
    res.send('Hello World!');

});

// Rota para Veículos
app.get('/veiculo', (req, res) => {
    res.send('Você esta na pagina de veículo.');

});

//Rota para clientes
app.get('/cliente', (req, res) => {
    res.send('Você está na rota cliente.')
});

// Rota para salvar dados
app.put('/veiculo/salvar', (req, res) => {
    res.send('Dados salvos com sucesso.');

});

// Rota para deletar dados
app.delete('/veiculo/delete', (req, res) => {
    res.send('Dados deletados com sucesso.');

});


app.listen(port, hostname, console.log('Servidor rodando...'));