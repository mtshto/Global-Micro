// controllers/objetivosController.js
const objetivoRepository = require('../repositories/objetivoRepository');

async function getObjetivosByTable(req, res) {
  const tabela = req.params.tabela;

  try {
    // Verifique se a tabela é válida (para evitar injeção de SQL, por exemplo)
    const allowedTables = ['ODS311', 'ODS312', 'ODS321', 'ODS322', 'ODS332', 'ODS333', 'ODS334', 'ODS335', 'ODS341', 'ODS342', 'ODS352', 'ODS361', 'ODS372', 'ODS382', 'ODS393'];

    if (!allowedTables.includes(tabela)) {
      return res.status(400).json({
        error: 'Tabela inválida.'
      });
    }

    // Realize a consulta com base na tabela fornecida
    const objetivos = await objetivoRepository.getObjetivosByTable(tabela);
    res.json(objetivos);
  } catch (error) {
    res.status(500).json({
      error: 'Erro ao obter objetivos.'
    });
  }
}

module.exports = {
  getObjetivosByTable,
};