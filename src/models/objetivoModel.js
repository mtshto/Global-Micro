// models/objetivosModel.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../util/db');

const Objetivos = sequelize.define('Objetivos', {
  ID: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  OBJETIVOS_GLOBAL: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  OBJETIVOS_BRASIL: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  CODIGO_INDICADOR: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  DESCRICAO: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'objetivos', // Nome da tabela no banco de dados
  timestamps: false, // Se a tabela tem campos createdAt e updatedAt
});

module.exports = Objetivos;
