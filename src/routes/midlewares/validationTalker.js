const validateToken = async (req, res, next) => {
  const { authorization } = req.headers;
  const TOKEN_LENGTH = 16;
  if (!authorization) {
    return res.status(401).json({ message: 'Token não encontrado' });
  }
  if (authorization.length !== TOKEN_LENGTH) {
    return res.status(401).json({ message: 'Token inválido' });
  }
  next();
};

const validateName = async (req, res, next) => {
  const { name } = req.body;
  const MIN_NAME_LENGTH = 3;
  if (!name) {
    return res.status(400).json({ message: 'O campo "name" é obrigatório' });
  }
  if (name.length < MIN_NAME_LENGTH) {
    return res.status(400).json({
      message: `O "name" deve ter pelo menos ${MIN_NAME_LENGTH} caracteres`,
    });
  }
  next();
};

const validateAge = async (req, res, next) => {
  const { age } = req.body;
  const MIN_AGE = 18;
  if (!age) {
    return res.status(400).json({ message: 'O campo "age" é obrigatório' });
  }
  if (typeof age !== 'number' || !Number.isInteger(age) || age < MIN_AGE) {
    return res.status(400).json({
      message: `O campo "age" deve ser um número inteiro igual ou maior que ${MIN_AGE}`,
    });
  }
  next();
};

const validateTalk = async (req, res, next) => {
  const { talk } = req.body;
  if (!talk) {
    return res.status(400).json({ message: 'O campo "talk" é obrigatório' });
  }
  next();
};

const validateWatchedAt = async (req, res, next) => {
  const { watchedAt } = req.body.talk;
  const dateRegEx = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;
  if (!watchedAt || watchedAt === 0 || !dateRegEx.test(watchedAt)) {
    return res.status(400).json({
      message: !watchedAt
        ? 'O campo "watchedAt" é obrigatório'
        : 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
    });
  }
  return next();
};

const validateRate = async (req, res, next) => {
  const { rate } = req.body.talk;
  const MIN_RATE = 1;
  const MAX_RATE = 5;
  if (rate === undefined) {
    return res.status(400).json({ message: 'O campo "rate" é obrigatório' });
  }
  if (!Number.isInteger(rate) || rate < MIN_RATE || rate > MAX_RATE) {
    return res.status(400).json({
      message: `O campo "rate" deve ser um número inteiro entre ${MIN_RATE} e ${MAX_RATE}`,
    });
  }
  next();
};

module.exports = {
  validateToken,
  validateName,
  validateAge,
  validateTalk,
  validateWatchedAt,
  validateRate,
};
