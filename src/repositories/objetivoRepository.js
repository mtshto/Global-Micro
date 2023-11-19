// repositories/objetivoRepository.js
const db = require('../util/db');

async function getObjetivosByTable(tabela) {
  try {
    // Utilize o nome da tabela fornecido para a consulta
    const query = `SELECT * FROM ${tabela}`;

    console.log('Query:', query); // Adicione esta linha para ver a consulta gerada

    return await db.execute(query);
  } catch (error) {
    console.error('Erro ao obter objetivos:', error);
    throw error;
  }
}

module.exports = {
  getObjetivosByTable,
};
