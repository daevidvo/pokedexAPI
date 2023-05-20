const { pokemon, thought } = require("../models/index.js");

async function getPokemon(req, res) {
  try {
    const pokemonData = await pokemon.find();
    res.status(200).json(pokemonData);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function postPokemon(req, res) {
  try {
    const pokemonData = await pokemon.create(req.body);
    res.status(200).json(pokemonData);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function getSinglePokemon(req, res) {
  try {
    const pokemonData = await pokemon.findOne({ _id: req.params.pokemonID });
    if (!pokemonData) {
      res.status(500).json({ message: "no pokemon with this id exists" });
    } else {
      res.status(200).json(pokemonData);
    }
  } catch (err) {
    res.status(500).json(err);
  }
}

async function putSinglePokemon(req, res) {
  try {
    const pokemonData = await pokemon.findOneAndUpdate(
      { _id: req.params.pokemonID },
      { $set: req.body },
      { runValidators: true, new: true }
    );
    if (!pokemonData) {
      res
        .status(500)
        .json({ message: "no pokemon with this id exists failed to update" });
    } else {
      res.status(200).json(pokemonData);
    }
  } catch (err) {
    res.status(500).json(err);
  }
}

async function deleteSinglePokemon(req, res) {
  try {
    const pokemonData = await pokemon.findOneAndDelete({
      _id: req.params.pokemonID,
    });
    if (!pokemonData) {
      res.status(500).json({message: 'no pokemon with this id exists failed to delete'})
    } else {
        thought.deleteMany({_id: {$in: pokemon.thought}})
        res.status(200).json({message: 'successfully deleted pokemon and its associated thoughts'})
    }
  } catch (err) {
    res.status(500).json(err);
  }
}

module.exports = {
  getPokemon,
  postPokemon,
  getSinglePokemon,
  putSinglePokemon,
  deleteSinglePokemon
};
