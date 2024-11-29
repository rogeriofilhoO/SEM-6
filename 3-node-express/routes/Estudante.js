// Importação das bibliotecas 
const express = require('express');

// função para manipulação de rotas
const rotas = express.Router();

//Raiz
rotas.get('/', (req, res) => {
    //Forma Objeto json
    res.status(200).send({
        mensagem: 'Você está na raiz da rota do Estudante.'
    });
    //Forma 'normal'
    //res.status(200).send('Você está na raíz da rota estudante.');
    //Forma antiga
    //res.send('Você está na raíz da rota estudante.');
});

// Rota put para estuante
rotas.put('/', (req, res) => {
    res.status(200),send('Você esta na rota put para Estudante.');
});

// Rota para o método post
rotas.post('/', (req, res) => {
    res.status(201).send({
        mensagem: 'Estudante cadastrado com sucesso.'
    });
});

// Rota para o método delete
rotas.delete('/', (req, res) => {
    res.status(202).send({
        mensagem: 'Estudante excluído com sucesso.'
    });
});


//exportar o código que manipula a rota para estudante
module.exports = rotas;