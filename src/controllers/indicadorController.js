// controllers/indicadorController.js
const indicadorRepository = require('../repositories/indicadorRepository');

async function getIndicadorById(req, res) {
  const indicadorId = req.params.id;

  try {
    const indicador = await indicadorRepository.getIndicadorById(indicadorId);
    res.json(indicador);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter indicador.' });
  }
}

module.exports = {
  getIndicadorById,
};
