// repositories/objetivoRepository.js
const db = require('../util/db');

async function getObjetivosComIndicadores() {
  const query = `
  select * from objetivos;
  `;

  const [result] = await db.execute(query, { raw: true });

  return result;
}

module.exports = {
  getObjetivosComIndicadores,
  // ... outras funções ...
};
