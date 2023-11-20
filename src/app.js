// app.js
const express = require('express');
const app = express();
const db = require('./util/db');
const { sequelize } = require('./util/db'); // Importe o Sequelize

app.use(express.json());

// Registro dos modelos (caso necessário)
const Objetivos = require('./models/objetivoModel'); // Substitua com o nome correto do seu modelo
const Indicador = require('./models/indicadorModel'); // Substitua com o nome correto do seu modelo

// Rotas
const objetivosRouter = require('./routers/objetivosRouter');
const indicadorRouter = require('./routers/indicadorRouter');

app.use(objetivosRouter);
app.use(indicadorRouter);

const PORT = process.env.PORT || 3001;

// Conectar ao banco de dados Oracle antes de iniciar o servidor
db.connect()
  .then(async () => {
    // Sincronizar os modelos com o banco de dados
    await sequelize.sync();
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Erro ao conectar ao banco de dados Oracle:', error);
  });

module.exports = app;
