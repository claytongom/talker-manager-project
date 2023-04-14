const express = require('express');
const talkerRoute = require('./routes/talkerRoute');

const app = express();
app.use(express.json());

const HTTP_OK_STATUS = 200;
const PORT = process.env.PORT || '3001';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

// Adiciona a rota '/talker'
app.use('/talker', talkerRoute);

app.listen(PORT, () => {
  console.log('Online');
});
