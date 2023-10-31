const express = require('express');
const router = express.Router();
const animesController = require('../controllers/AnimesController');

//TODO: Criar rotas da aplicação

router.get("/", animesController.getAllAnimes);
router.get("/:id",animesController.getAnimesById);
router.post("/add", animesController.createAnime);
router.patch("/update/:id", animesController.updateAnime);
router.delete("/delete/:id",animesController.deleteAnime);

module.exports = router;