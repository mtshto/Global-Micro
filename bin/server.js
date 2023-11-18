// server.js
const express = require('express');
const objetivosRouter = require('./routers/objetivosRouter');
const indicadorRouter = require('./routers/indicadorRouter');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(objetivosRouter);
app.use(indicadorRouter);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
