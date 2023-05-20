const mongoose = require('mongoose')
const thoughtSchema = require('./thought.js')
const reactionSchema = require('./reaction.js')

const pokemonSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true, trim: true},
    email: {type: String, required: true, unique: true, match: [/^\w+@\w+.\w{2,4}$/, 'Please enter a valid email address']},
    thought: [thoughtSchema],
    friends: [{type: mongoose.Schema.Types.ObjectId, ref: 'user'}]
})

const pokemon = mongoose.model('pokemon', pokemonSchema)

module.exports = pokemon