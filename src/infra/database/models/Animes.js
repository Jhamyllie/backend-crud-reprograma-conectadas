const mongoose = require("mongoose");

const Model = new mongoose.Schema({
  _id: { 
    type: mongoose.Schema.Types.ObjectId, 
    default: () => new mongoose.Types.ObjectId()
  },
  title: { 
    type: String,
    required: [true, "Title is required"],
    unique: true,
  },
  gender: {
    type: String,
    required: [true, "Gender is required"]
  },
  image:{
    type: String,
    required: [true, "Image is required"]
  },
  origin:{
    type: String,
    enum: ['ORIGINAL', 'MANGA', 'LIGHTNOVEL', 'BOOKS', 'FILMS'],
    required: [true, "Origin is required"]
  },
  studio:{
    type: String,
    required: [true, "Studio is required"]
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
