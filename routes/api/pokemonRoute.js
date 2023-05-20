const router = require("express").Router();
const {
  getPokemon,
  postPokemon,
  getSinglePokemon,
  putSinglePokemon,
  deleteSinglePokemon,
} = require("../../controllers/pokemonController.js");

router.route("/").get(getPokemon).post(postPokemon);
router.route(":pokemonID").get(getSinglePokemon).put(putSinglePokemon).delete(deleteSinglePokemon);

module.exports = router;
