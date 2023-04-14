const fs = require('fs/promises');

// Define uma função assíncrona que retorna uma promessa
async function readTalker() {
// Lê o conteúdo do arquivo 'src/talker.json' usando o método 'readFile'
  const talkers = await fs.readFile('src/talker.json', 'utf-8');
 // Converte o conteúdo do arquivo em um objeto JSON
  return JSON.parse(talkers);
}

module.exports = {
    readTalker,
};