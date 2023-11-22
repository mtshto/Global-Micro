const { DataTypes } = require('sequelize');
const { sequelize } = require('../util/db'); // Importar a instância do Sequelize

const Indicador = sequelize.define('Indicador', {
  CODIGO: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  REGIAO: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  TAXA: {
    type: DataTypes.DECIMAL(10, 2), // Usando DECIMAL para representar um número com precisão fixa
    allowNull: false,
  },
  ANO: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'indicador', // Nome da tabela no banco de dados
  timestamps: false, // Se a tabela tem campos createdAt e updatedAt
});

module.exports = Indicador;
