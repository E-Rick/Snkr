const mongoose = require('mongoose');
const Schema = mogoose.Schema;

const PostSchema = new Schema({
  title: String,
  price: String,
  description: String,
  images: [String],
  location: String,
  lat: Number,
  lng: Number,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Review'
    }
  ]
});

module.exports = mongoose.model('Post', PostSchema);
