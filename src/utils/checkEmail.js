// // função para verificar campo de email válido
const checkEmail = (email) => /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email);

module.exports = checkEmail;
