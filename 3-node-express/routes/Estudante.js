// Importação das bibliotecas 
const express = require('express');

// função para manipulação de rotas
const rotas = express.Router();

//Raiz
rotas.get('/', (req, res) => {
    res.send('Você está na raíz da rota estudante.');
});

// Rota put para estuante
rotas.put('/', (req, res) => {
    res.send('Você esta na rota put para estudante.');
});

// Rota para o método post


// Rota para o método delete



//exportar o código que manipula a rota para estudante
module.exports = rotas;