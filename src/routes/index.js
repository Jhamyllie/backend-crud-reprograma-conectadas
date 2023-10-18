const express = require('express');
const router = express.Router();
const bookController = require('../controllers/AnimesController');

//TODO: Criar rotas da aplicação

router.get("/", bookController.getAllAnimes);
router.post("/create", bookController.createAnime);

module.exports = router;