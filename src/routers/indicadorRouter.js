// routers/indicadorRouter.js
const express = require('express');
const indicadorController = require('../controllers/indicadorController');

const router = express.Router();

router.get('/indicador/:id', indicadorController.getIndicadorById);

module.exports = router;
