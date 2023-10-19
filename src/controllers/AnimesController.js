const service = require('../services/AnimesService');
const mongoose = require('mongoose');

//TODO: Criar controllers da aplicação
const getAllAnimes = async (_req, res) => {
	try {
		const animes = await service.getAllAnimes();

		if(animes.length === 0){
			return res.status(404).json({message: "Não foram encontardos animes no banco de dados"})
		}
		return res.status(200).json(animes);
	} catch (error) {
		return res.status(500).json({message: error.message});
	}
	
}

const getAnimesById = async (req, res) => {
	try {
		const { id } = req.params;
		const anime = await service.getById(id);
		if(!anime){
			return res.status(404).json({message: "Anime não encontrado"});
		}
		return res.status(200).json(anime);
	} catch (error) {
		return res.status(500).json({message: error.message});
	}
}

const createAnime = async (req, res) => {
	try {
		const {title, gender, description, author} = req.body;

		if(!title, !gender, !description, !author){
			return res.status(403).json({message: "Todos os campos são obrogatórios"});
		}

		const neWAnime = {title, gender, description, author};
		const savedAnime = await service.registerAnime(neWAnime);
  	return res.status(201).json({message: "New Anime added successfully", savedAnime});

	} catch (error) {
		return res.status(500).json({message: error.message});
	}
}

module.exports = {
  getAllAnimes,
	getAnimesById,
	createAnime
}