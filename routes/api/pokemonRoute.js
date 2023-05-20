const router = require("express").Router();
const {
  getAllPokemon,
  postPokemon,
  getSinglePokemon,
  putSinglePokemon,
  deleteSinglePokemon,
  postSinglePokemonFriend,
  deleteSinglePokemonFriend,
} = require("../../controllers/pokemonController.js");

router.route("/").get(getAllPokemon).post(postPokemon);
router
  .route("/:pokemonID")
  .get(getSinglePokemon)
  .put(putSinglePokemon)
  .delete(deleteSinglePokemon);
router
  .route("/:pokemonID/friends/:friendID")
  .post(postSinglePokemonFriend)
  .delete(deleteSinglePokemonFriend);

module.exports = router;
