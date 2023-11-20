// repositories/indicadorRepository.js
const Indicador = require('../models/indicadorModel');

async function getIndicadorById(id) {
  try {
    const indicador = await Indicador.findAll({
      where: {
        CODIGO: id,
      },
    });
    return indicador;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getIndicadorById,
};
