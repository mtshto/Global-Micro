// src/util/testConnection.js
const db = require('./db');

async function testConnection() {
  try {
    // Certifique-se de chamar o método connect para estabelecer a conexão
    await db.connect();

    // Consulta à tabela ODS311
    const query = 'SELECT * FROM objetivos';
    const result = await db.sequelize.query(query, { type: db.sequelize.QueryTypes.SELECT });

    // Exibir os resultados
    console.log('Resultados da consulta:');
    console.table(result);

    // Feche a conexão para evitar vazamentos
    await db.sequelize.close();
  } catch (error) {
    // Se houver um erro, imprima a mensagem de erro
    console.error('Erro de conexão ou consulta:', error);
  }
}

// Chame a função para testar a conexão e a consulta
testConnection();
