// testConnection.js
const db = require('./db');

async function testConnection() {
  try {
    const connection = await db.connect();

    // Consulta à tabela ODS311
    const query = 'SELECT REGIAO, ANO_2011 FROM ODS311';
    const result = await connection.execute(query);

    // Exibir os resultados
    console.log('Resultados da consulta:');
    console.table(result.rows);

    // Feche a conexão para evitar vazamentos
    await connection.close();
  } catch (error) {
    // Se houver um erro, imprima a mensagem de erro
    console.error('Erro de conexão ou consulta:', error);
  }
}

// Chame a função para testar a conexão e a consulta
testConnection();
