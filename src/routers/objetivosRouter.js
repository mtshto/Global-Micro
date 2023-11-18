// routers/objetivosRouter.js
const express = require('express');
const objetivosController = require('../controllers/objetivosController');

const router = express.Router();

// Rota para obter objetivos com base na tabela fornecida como parâmetro
router.get('/objetivos/:tabela', objetivosController.getObjetivosByTable);

module.exports = router;
