// routers/indicadorRouter.js
const express = require('express');
const indicadorController = require('../controllers/indicadorController');

const router = express.Router();

console.log('Entrou no indicadorRouter.js');

// Rota para obter indicador por ID
router.get('/indicador/:id', indicadorController.getIndicadorById);

console.log('Saiu do indicadorRouter.js');

module.exports = router;
