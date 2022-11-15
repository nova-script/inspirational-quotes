import mongoose from 'mongoose'

const QuoteSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true
  },
  quote: {
    type: String,
    required: true
  }
}, { collection: 'Quote' })

export default mongoose.model('Quote', QuoteSchema)
