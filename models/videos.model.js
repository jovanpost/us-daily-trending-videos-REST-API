const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const videoSchema = new Schema({
  response: { type: String, required: true },
  _id: { type: String, required: false },
  },
);

const Video = mongoose.model('Video', videoSchema);

module.exports = Video;
