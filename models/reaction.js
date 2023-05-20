const mongoose = require('mongoose')
const {formatTimestamp} = require('../controllers/thoughtController.js')

const reactionSchema = new mongoose.Schema({
    reactionId: {type: mongoose.Schema.Types.ObjectId, default: new mongoose.Schema.Types.ObjectId},
    reactionBody: {type: String, required: true, maxLength: 280},
    pokemon: {type: String, required: true},
    createdAt: {type: Date, default: Date.now, get: formatTimestamp}
})

module.exports = reactionSchema