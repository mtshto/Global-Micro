const express = require('express');
const app = express();
const db = require('./util/db');

app.use(express.json());

// Registro dos modelos (caso necessário)

// Rotas
const objetivosRouter = require('./routers/objetivosRouter'); // Ajuste o caminho aqui
const indicadorRouter = require('./routers/indicadorRouter'); // Ajuste o caminho aqui
// Outras rotas, se houver

app.use(objetivosRouter);
app.use(indicadorRouter);
// Outras rotas, se houver

const PORT = process.env.PORT || 3001;

// Conectar ao banco de dados Oracle antes de iniciar o servidor
db.connect()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Erro ao conectar ao banco de dados Oracle:', error);
  });

module.exports = app;
