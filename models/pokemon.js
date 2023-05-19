const mongoose = require('mongoose')

const pokemonSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true, trim: true},
    email: {type: String, required: true, unique: true, match: [/^\w+@\w+.\w{2,4}$/, 'Please enter a valid email address']},
    thought: {type: mongoose.Schema.Types.ObjectId, ref: 'thought'},
    friends: {type: mongoose.Schema.Types.ObjectId, ref: 'user'}
})

const pokemon = mongoose.model('pokemon', pokemonSchema)

pokemon.find({}, (err, results) => {
    if (err) {
        console.err(err)
    } else if (results.length === 0) {
        pokemon.insertMany([
            {
                name: 'Rayquaza',
                email: 'rayquaza@pokedex.com',
                thought: '',
                friends: ''
            }
        ])
    }
})


module.exports = pokemon