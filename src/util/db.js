// src/utils/db.js
const oracledb = require('oracledb');

async function connect() {
  try {
    const connection = await oracledb.getConnection({
      user: 'rm88430',
      password: '040302',
      connectString: 'oracle.fiap.com.br:1521/orcl',
    });

    console.log('Conexão com Oracle SQL bem-sucedida');
    return connection;
  } catch (error) {
    console.error('Erro ao conectar ao Oracle SQL:', error);
    throw error;
  }
}

module.exports = {
  connect,
};
