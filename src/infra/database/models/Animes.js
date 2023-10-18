const mongoose = require("mongoose");

const Model = new mongoose.Schema({
  _id: { 
    type: mongoose.Schema.Types.ObjectId, 
    default: () => new mongoose.Types.ObjectId()
  },
  title: { 
    type: String,
    required: [true, "Title is required"] 
  },
  gender: {
    type: String,
    required: [true, "Gender is required"]
  },
  description:{
    type: String,
    required: [true, "Description is required"]
  },
  author: {
    type: String,
    required: [true, "Author is required"]
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
});
const Animes = mongoose.model("animes", Model);
module.exports = Animes;
