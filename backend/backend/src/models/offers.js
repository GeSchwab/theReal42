const mongoose = require('mongoose')

const OfferSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  descriptions: {
    type: String,
    required: true,
  },
  // exchange item
  price: Number,
  wants: [{type: mongoose.Schema.Types.ObjectId,ref: 'Wants'}],
  images: [String],
  amount: {
    type: Number,
    required: true
  },
  isInfinite: Boolean,

  categories: [String],
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },

})

module.exports = mongoose.model('Offer',OfferSchema)
