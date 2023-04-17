const checkEmail = require('../../utils/checkEmail');

function validateEmail(email) {
  if (!email) {
    return {
      error: true,
      message: 'O campo "email" é obrigatório',
    };
  }

  const correctEmail = checkEmail(email);

  if (!correctEmail) {
    return {
      error: true,
      message: 'O "email" deve ter o formato "email@email.com"',
    };
  }

  return { error: false };
}

function validatePassword(password) {
  if (!password) {
    return {
      error: true,
      message: 'O campo "password" é obrigatório',
    };
  }

  if (password.length < 6) {
    return {
      error: true,
      message: 'O "password" deve ter pelo menos 6 caracteres',
    };
  }

  return { error: false };
}

function validateLogin(req, res, next) {
  const { email, password } = req.body;

  const emailValidation = validateEmail(email);
  if (emailValidation.error) {
    return res.status(400).json(emailValidation);
  }

  const passwordValidation = validatePassword(password);
  if (passwordValidation.error) {
    return res.status(400).json(passwordValidation);
  }

  return next();
}

module.exports = validateLogin;
