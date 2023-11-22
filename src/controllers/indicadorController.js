// controllers/indicadoresController.js
const indicadorRepository = require('../repositories/indicadorRepository');

async function getIndicador(req, res) {
  const { id } = req.params;

  try {
    const indicadorData = await indicadorRepository.getIndicadorById(id);

    // Verificar se há dados retornados
    if (!indicadorData || indicadorData.length === 0) {
      return res.status(404).json({
        error: 'Indicador não encontrado.',
      });
    }

    // Formatando os dados conforme necessário
    const formattedData = indicadorData.map(item => ({
      ano: item.ANO,
      consumo: item.TAXA,
    }));

    res.json(formattedData);
  } catch (error) {
    console.error('Erro ao obter indicador:', error);
    res.status(500).json({
      error: 'Erro ao obter indicador.',
    });
  }
}

module.exports = {
  getIndicador,
};
