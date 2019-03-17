const mongoose = require('mongoose');
const Schema = mogoose.Schema;

const ReviewSchema = new Schema({
  body: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

module.exports = mongoose.model('Review', ReviewSchema);
