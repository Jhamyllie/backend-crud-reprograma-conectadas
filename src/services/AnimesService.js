const Animes = require('../infra/database/models/Animes');

//TODO: Criar service da aplicação
const getAllAnimes = async () => {
  return await Animes.find();
}

const getById = async (id) => {
  return await Animes.findById(id);
}

const registerAnime = async (anime) => {
  return await Animes.create(anime);
}

const updateAnime = async (id, anime) => {
  return await Animes.findByIdAndUpdate(id, anime);
}

const deleteAnime = async (id) => {
  return await Animes.findByIdAndDelete(id)
}

module.exports = {
  getAllAnimes,
  registerAnime,
  getById,
  updateAnime,
  deleteAnime
}
