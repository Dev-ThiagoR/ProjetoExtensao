const express = require('express');
const router = express.Router();
const { getAllContent, seedContent } = require('../controllers/contentController');

router.get('/', getAllContent);
router.post('/seed', seedContent); // Rota para popular o banco de dados

module.exports = router;