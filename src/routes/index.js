const express = require('express');
const router = express.Router();
const animesController = require('../controllers/AnimesController');

//TODO: Criar rotas da aplicação

router.get("/", animesController.getAllAnimes);
router.get("/:id",animesController.getAnimesById);
router.post("/add", animesController.createAnime);

module.exports = router;