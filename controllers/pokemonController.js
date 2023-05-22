const { pokemon } = require("../models");

async function getAllPokemon(req, res) {
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
      res.status(404).json({ message: "no pokemon with this id exists" });
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
        .status(404)
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
      res
        .status(404)
        .json({ message: "no pokemon with this id exists failed to delete" });
    } else {
      res.status(200).json({
        message: "successfully deleted pokemon",
      });
    }
  } catch (err) {
    res.status(500).json(err);
  }
}

async function postSinglePokemonFriend(req, res) {
  try {
    const friendData = await pokemon.findOneAndUpdate(
      { _id: req.params.pokemonID },
      { $push: { friends: req.params.friendID } },
      { runValidators: true, new: true }
    );
    if (!friendData) {
      res.status(404).json({
        message: "no pokemon with this id was found failed to update friends",
      });
    } else {
      res.status(200).json(friendData);
    }
  } catch (err) {
    res.status(500).json(err);
  }
}

async function deleteSinglePokemonFriend(req, res) {
  try {
    const friendData = await pokemon.findOneAndUpdate(
      { _id: req.params.pokemonID },
      { $pull: { friends: req.params.friendID } },
      { runValidators: true, new: true }
    );
    if (!friendData) {
      res.status(404).json({
        message: "no pokemon with this id exists failed to remove friend",
      });
    } else {
      res
        .status(200)
        .json({ message: "successfully delete friend from this pokemon" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
}

module.exports = {
  getAllPokemon,
  postPokemon,
  getSinglePokemon,
  putSinglePokemon,
  deleteSinglePokemon,
  postSinglePokemonFriend,
  deleteSinglePokemonFriend,
};
