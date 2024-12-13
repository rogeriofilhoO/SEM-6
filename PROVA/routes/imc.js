// Importando bibliotecas
const express = require('express');

// Manipulando rotas
const rotas = express.Router();

// método POST
rotas.post("/", (req, res) => {
    // passando as informações pelo body
    const info = {
        peso : req.body.peso,
        altura : req.body.altura,
    };

    //Calculando
    const calc = Number(info.peso) /(Number(info.altura) * Number(info.altura)).toFixed(2);
    
    const Response = calc.toFixed(1);

    //Forma de Resposta
    const imc = {
        imc : Response
    }

    // Mostrando os resultados
    res.send(imc).statusCode(201);
});

// Exportando rotas
module.exports = rotas;