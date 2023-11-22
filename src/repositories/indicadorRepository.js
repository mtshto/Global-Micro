// repositories/indicadorRepository.js
const db = require('../util/db');

async function getIndicadorById(id) {
  const query = `
    SELECT ANO, TAXA
    FROM indicador
    WHERE CODIGO = :id;
  `;

  const [result] = await db.execute(query, { replacements: { id }, raw: true });

  return result;
}

module.exports = {
  getIndicadorById,
};
