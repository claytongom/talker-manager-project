const express = require('express');
const { readTalker } = require('../utils/crudFunctions');

// Cria um objeto de rota
const talkerRoutes = express.Router();
// Define uma rota GET para a raiz da rota '/talkerRoutes'
talkerRoutes.get('/', async (_req, res) => {
// Chama a função assíncrona 'readTalker()'
    const talkers = await readTalker();
// Retorna uma resposta JSON com os dados lidos e status 200
    res.status(200).json(talkers);
});

module.exports = talkerRoutes;
