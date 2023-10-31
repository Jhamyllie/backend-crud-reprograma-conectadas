const service = require('../services/AnimesService');
const mongoose = require('mongoose');

//TODO: Criar controllers da aplicação
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
		const {title, gender, image, origin, description, author, studio} = req.body;

		if(!title, !gender, !image, !description, !origin, !author, !studio){
			return res.status(403).json({message: "All fields are mandatory"});
		}

		const neWAnime = {title, gender, image, origin, description, author, studio};
		const savedAnime = await service.registerAnime(neWAnime);
		return res.status(201).json({message: "New Anime added successfully", savedAnime});

	} catch (error) {
		return res.status(500).json({message: error.message});
	}
}

const updateAnime = async (req, res) => {
	// try {
	// 	const { id } = req.params;
	// 	const {title, gender, origin, image, description, author, studio} = req.body;

	// 	if(!id){
	// 		return res.status(404).json({message: "Anime not found"});
	// 	}

	// 	if(!title || !gender || image || description || origin || author || studio){
	// 		return res.status(403).json({message: "All fields are mandatory"});
	// 	}

	// 	const updating = await service.updateAnime(id, {
	// 		title,
	// 		gender,
	// 		image,
	// 		origin,
	// 		description,
	// 		author,
	// 		studio
	// 	});

	// 	return res.status(200).json({message: "Update completed successfully", updating});
	// } catch (error) {
	// 	return res.status(500).json({message: error.message});
	// }
	try {
		const animeId = req.params.id;
		const updatedFields = req.body;
		const options = { new: true };
	
		const result = await Animes.findByIdAndUpdate(animeId, updatedFields, options);
	
		if (!result) {
		  return res.status(404).json({ message: "Anime not found" });
		}
	
		return res.status(200).json({ message: "Anime updated successfully", data: result });
	  } catch (error) {
		return res.status(500).json({ message: "Internal server error", error: error.message });
	  }
	
	// try {
	// 	const animeId = req.params.id;
	// 	const updatedAnime = req.body;
	// 	const result = await Animes.findByIdAndUpdate(animeId, updatedAnime, {
	// 	  new: true,
	// 	});
	
	// 	if (!result) {
	// 	  return res.status(404).json({ message: "Anime not found" });
	// 	}
	
	// 	return res.status(200).json({ message: "Anime updated successfully", data: result });
	// } catch (error) {
	// 	return res.status(500).json({ message: "Internal server error", error: error.message });
	// }
}

const deleteAnime = async(req, res)=> {
	try {
		const { id } = req.params;
		const deleted = await service.deleteAnime(id);
		return res.status(200).json({message: `O anime do ${deleted.title}, foi deletado com sucesso.`})
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