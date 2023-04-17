const express = require('express');
const generateToken = require('../utils/generateToken');

const loginRoute = express.Router();

// definição do tratamento da requisição POST para '/login'
loginRoute.post('/', async (req, res) => {
    const { email, password } = req.body;
    const token = generateToken(email, password);
    res.status(200).json({ token });
    });

module.exports = loginRoute;
