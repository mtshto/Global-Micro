// src/utils/db.js
const { Sequelize } = require('sequelize');


console.log('Host:', process.env.DB_HOST || 'oracle.fiap.com.br');
console.log('Port:', process.env.DB_PORT || 1521);
console.log('Username:', process.env.DB_USER || 'rm88430');
console.log('Password:', process.env.DB_PASSWORD || '040302');
console.log('Database:', process.env.DB_NAME || 'orcl');

// Configurar a conexão com o banco de dados Oracle
const sequelize = new Sequelize(
  `oracle://${process.env.DB_USER || 'rm88430'}:${process.env.DB_PASSWORD || '040302'}@${process.env.DB_HOST || 'oracle.fiap.com.br'}:${process.env.DB_PORT || 1521}/${process.env.DB_NAME || 'orcl'}`
);

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
