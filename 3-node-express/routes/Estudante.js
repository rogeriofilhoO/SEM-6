// Importação das bibliotecas 
const express = require('express');

// função para manipulação de rotas
const rotas = express.Router();

//Raiz
rotas.get('/:idEstudante', (req, res) => {

    const idEstudante = req.params.idEstudante;

    //Forma Objeto json
    res.status(200).send({
        mensagem: `O id do Estudante é: ${idEstudante}`
    });
    //Forma 'normal'
    //res.status(200).send('Você está na raíz da rota estudante.');
    //Forma antiga
    //res.send('Você está na raíz da rota estudante.');
});

// Rota put para estuante
rotas.put('/', (req, res) => {
    res.status(200),send({
        mensagem: 'Os dados foram atualizados com sucesso.'
    });
});

// Rota para o método post
rotas.post('/', (req, res) => {

    const novoEstudante = {
        nome: req.body.nome,
        email: req.body.email,
        telefone: req.body.telefone
    };

    //Implementação do código para enviar ao banco de dados.

    res.status(201).send({
        mensagem: 'Estudante cadastrado com sucesso.',
        dadosNovoEstudante: novoEstudante
    });
});

// Rota para o método delete
rotas.delete('/', (req, res) => {

    //obtém o id enviado pelo corpo da requisição
    const idEstudante = req.body.idEstudante;

    // Implementação da consulta para verificar se existe o estudante.
    consultaIdBancoDados = 123

    if(idEstudante == consultaIdBancoDados) {
        res.status(202).send({
            mensagem: `O Estudante de id: ${idEstudante} excluído com sucesso.`
        });
    } else {
        res.status(200).send({
            mensagem: 'O estudante não foi encontrado no banco de dados.'
        })
    }
    
});


//exportar o código que manipula a rota para estudante
module.exports = rotas;