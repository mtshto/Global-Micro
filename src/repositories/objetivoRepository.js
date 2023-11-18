// repositories/objetivoRepository.js
const db = require('../utils/db');

function getObjetivosByTable(tabela) {
  // Utilize o nome da tabela fornecido para a consulta
  const query = `SELECT * FROM ${tabela}`;

  return db.execute(query);
}

module.exports = {
  getObjetivosByTable,
};
