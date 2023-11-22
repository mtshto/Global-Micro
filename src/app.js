const express = require('express');
const app = express();
const db = require('./util/db');
const { sequelize } = require('./util/db');

app.use(express.json());

// Registro dos modelos (caso necessário)
const Objetivos = require('./models/objetivoModel');
const Indicador = require('./models/indicadorModel');

// Rotas
const objetivosRouter = require('./routers/objetivosRouter');
const indicadorRouter = require('./routers/indicadorRouter');

// Use os roteadores diretamente no app
app.use('/objetivos', objetivosRouter);
app.use('/indicadores', indicadorRouter);

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
