// src/utils/db.js
const { Sequelize } = require('sequelize');

// Configurar a conexão com o banco de dados Oracle
const sequelize = new Sequelize({
  dialect: 'oracle',
  host: process.env.DB_HOST || 'oracle.fiap.com.br',
  port: process.env.DB_PORT || 1521,
  database: process.env.DB_NAME || 'orcl',
  username: process.env.DB_USER || 'rm88430',
  password: process.env.DB_PASSWORD || '040302',
});

async function connect() {
  try {
    await sequelize.authenticate();
    console.log('Conexão com Oracle SQL bem-sucedida');
  } catch (error) {
    console.error('Erro ao conectar ao Oracle SQL:', error);
    throw error;
  }
}

async function execute(query, options = {}) {
  try {
    const result = await sequelize.query(query, options);
    return result;
  } catch (error) {
    console.error('Erro ao executar a consulta:', error);
    throw error;
  }
}

module.exports = {
  sequelize,
  connect,
  execute, // Exportar o método execute
};
