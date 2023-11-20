// repositories/objetivoRepository.js
const db = require('../util/db');

async function getObjetivosComIndicadores() {
  const query = `
  select * from objetivos;
  `;

  const [result] = await db.execute(query, { raw: true });
  
  // Flatten the array of arrays to a single array
  const flattenedResult = result.flatMap(row => row);

  return flattenedResult;
}

module.exports = {
  getObjetivosComIndicadores,
  // ... outras funções ...
};
