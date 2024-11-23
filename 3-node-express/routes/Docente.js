// Importação das bibliotecas 
const express = require('express');

// função para manipulação de rotas
const rotas = express.Router();

//Raiz
rotas.get('/', (req, res) => {
    res.send('Você está na raíz da rota docente.');
});

// Rota get para docente
rotas.get('/docente', (req, res) => {
    res.send('Você esta na rota get para docente.');
});

// Rota put para estuante
rotas.put('/docente', (req, res) => {
    res.send('Você esta na rota put para docente.');
});

// Rota para o método post
rotas.post('/', (req, res) => {
    res.send('Você esta na rota post para docente.');
});

// Rota para o método delete
rotas.delete('/', (req, res) => {
    res.send('Você esta na rota delete para docente.');
});

//exportar o código que manipula a rota para estudante
module.exports = rotas;