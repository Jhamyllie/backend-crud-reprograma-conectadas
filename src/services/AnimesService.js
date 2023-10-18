const Animes = require('../infra/database/models/Animes');

//TODO: Criar service da aplicação
const getAllAnimes = async () => {
  return await Animes.find();
}

const registerAnime = async (anime) => {
  return await Animes.create(anime)
}

module.exports = {
  getAllAnimes,
  registerAnime
}
