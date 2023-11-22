// controllers/objetivosController.js
const objetivoRepository = require('../repositories/objetivoRepository');

async function getObjetivos(req, res) {
  try {
    const objetivos = await objetivoRepository.getObjetivosComIndicadores();
    console.log('Objetivos do Banco de Dados:', objetivos);

    // Verificar se há objetivos antes de continuar
    if (!objetivos || objetivos.length === 0) {
      return res.status(404).json({
        error: 'Nenhum objetivo encontrado.',
      });
    }

    // Criar um objeto para armazenar os dados formatados
    const formattedData = {
      id: objetivos[0].ID, // Supondo que o ID é o mesmo para todos os objetivos
      objetivos: {},
      global: objetivos[0].OBJETIVOS_GLOBAL,
      brasil: objetivos[0].OBJETIVOS_BRASIL,
      indicadores: [],
    };

    // Preencher o objeto de objetivos
    for (const objetivo of objetivos) {
      formattedData.objetivos[objetivo.ID] = {
        id: objetivo.ID,
        descricao: objetivo.DESCRICAO,
        // Adicione mais campos conforme necessário
      };
    }

    // Preencher o array de indicadores
    for (const indicador of objetivos) {
      formattedData.indicadores.push({
        id: indicador.CODIGO_INDICADOR,
        descricao: indicador.DESCRICAO,
        // Adicione mais campos conforme necessário
      });
    }

    // Enviar a resposta
    res.json(formattedData);
  } catch (error) {
    console.error('Erro ao obter dados:', error);
    res.status(500).json({
      error: 'Erro ao obter dados.',
    });
  }
}

module.exports = {
  getObjetivos,
};
