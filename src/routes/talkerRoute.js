const express = require('express');
const { readTalker, writeTalker } = require('../utils/crudFunctions');
const { 
    validateToken,
    validateName,
    validateAge,
    validateTalk,
    validateWatchedAt,
    validateRate,
} = require('./midlewares/validationTalker');

// Cria um objeto de rota
const talkerRoutes = express.Router();
// Define uma rota GET para a raiz da rota '/talkerRoutes'
talkerRoutes.get('/', async (_req, res) => {
    // Chama a função assíncrona 'readTalker()'
    const talkers = await readTalker();
    // Retorna uma resposta JSON com os dados lidos e status 200
    res.status(200).json(talkers);
});

// Adiciona uma nova rota para '/talker/:id'
talkerRoutes.get('/:id', async (req, res) => {
    // Obtém o ID da pessoa palestrante da rota
    const { id } = req.params;
    // Chama a função assíncrona 'readTalker()'
    const talkers = await readTalker();
    // Procura a pessoa palestrante com o ID fornecido
    const foundTalker = talkers.find((talker) => talker.id === Number(id));
    // Se a pessoa palestrante não foi encontrada, retorna um erro 404
    if (!foundTalker) {
        return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
    }
    // Retorna a pessoa palestrante encontrada
    return res.status(200).json(foundTalker);
});

const newValidations = [
    validateToken,
    validateName,
    validateAge,
    validateTalk,
    validateWatchedAt,
    validateRate,
];

talkerRoutes.post('/', newValidations, async (req, res) => {
    try {
        const talkers = await readTalker();
        const { name, age, talk } = req.body;
        const newTalker = {
            id: talkers.length + 1,
            name,
            age,
            talk,
        };
        talkers.push(newTalker);
        await writeTalker(talkers);
        res.status(201).json(newTalker);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

talkerRoutes.put('/:id', newValidations, async (req, res) => {
    try {
      const { id } = req.params;
      const talkers = await readTalker();
      const foundTalker = talkers.find((talker) => talker.id === Number(id));
      if (!foundTalker) {
        return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
      }
      const { name, age, talk } = req.body;
      const updatedTalker = { id: Number(id), name, age, talk };
      const updatedTalkers = talkers.map((talker) => (
        talker.id === Number(id) ? updatedTalker : talker
      ));
      await writeTalker(updatedTalkers);
      res.status(200).json(updatedTalker);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

talkerRoutes.delete('/:id', validateToken, async (req, res) => {
    try {
        const { id } = req.params;
        const talkers = await readTalker();
        const foundTalker = talkers.find((talker) => talker.id === Number(id));
        if (!foundTalker) {
            return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
        }
        const updatedTalkers = talkers.filter((talker) => talker.id !== Number(id));
        await writeTalker(updatedTalkers);
        return res.status(204).send();
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
});

module.exports = talkerRoutes;
