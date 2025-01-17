const service = require('../services/AnimesService');
// const mongoose = require('mongoose');

const getAllAnimes = async (_req, res) => {
	try {
		const animes = await service.getAllAnimes();

		if(animes.length === 0){
			return res.status(404).json({message: "No animes were found in the database"})
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
			return res.status(404).json({message: "Anime not found"});
		}
		return res.status(200).json(anime);
	} catch (error) {
		return res.status(500).json({message: error.message});
	}
}

const createAnime = async (req, res) => {
	try {
		const {title, gender, image, origin, description, authorship, studio} = req.body;

		if(!title, !gender, !image, !description, !origin, !authorship, !studio){
			return res.status(403).json({message: "All fields are mandatory"});
		}

		const neWAnime = {title, gender, image, origin, description, authorship, studio};
		const savedAnime = await service.registerAnime(neWAnime);
		return res.status(201).json({message: "New Anime added successfully", savedAnime});

	} catch (error) {
		return res.status(500).json({message: error.message});
	}
}

const updateAnime = async (req, res) => {
	try {
		const { id } = req.params;
		const updateData = req.body;

		if(!id){
			return res.status(404).json({message: "Anime not found"});
		}
	
		const updatedAnime = await service.updateAnime(id, updateData);

		if(!updatedAnime){
			return res.status(403).json({message: "The update could not be completed. Try again.", updateData});
		} 
		return res.status(200).json({message: "Update completed successfully", updateData});
	} catch (error) {
		return res.status(500).json({message: "error.message"});
	}
}

const deleteAnime = async(req, res)=> {
	try {
		const { id } = req.params;
		const deleted = await service.deleteAnime(id);
		return res.status(200).json({message: `The anime from ${deleted.title} has been successfully deleted.`})
	} catch (error) {
		return res.status(500).json({message: error.message});
	}
}

module.exports = {
  getAllAnimes,
	getAnimesById,
	createAnime,
	updateAnime,
	deleteAnime
}
