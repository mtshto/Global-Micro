// routers/objetivosRouter.js
const express = require('express');
const objetivosController = require('../controllers/objetivosController');

const router = express.Router();

// Rota para obter objetivos
router.get('/', async (req, res) => {
  try {
    const formattedData = await objetivosController.getObjetivos(req, res);
    
    res.json(formattedData);
  } catch (error) {
    console.error('Erro ao obter dados:', error);
    return res.status(500).json({
      error: 'Erro ao obter dados.',
    });
  }
});

module.exports = router;
