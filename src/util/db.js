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

async function execute(query, binds = [], options = {}) {
  let connection;
  try {
    connection = await connect();
    const result = await connection.execute(query, binds, options);
    return result;
  } catch (error) {
    console.error('Erro ao executar a consulta:', error);
    throw error;
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error('Erro ao fechar a conexão:', err);
      }
    }
  }
}

module.exports = {
  connect,
  execute,
};
