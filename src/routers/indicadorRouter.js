const express = require('express');
const indicadoresController = require('../controllers/indicadorController'); // Corrigir o nome do controller

const router = express.Router();

// Rota para obter um indicador por ID
router.get('/:id', indicadoresController.getIndicador); // Remover '/indicador' do caminho

module.exports = router;
