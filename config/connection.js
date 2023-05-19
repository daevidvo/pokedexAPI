const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/pokedexDB', {
    useNewUrlParser: true,
    UseUnifiedTopology: true,
});

module.exports = mongoose.connection