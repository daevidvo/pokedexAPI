const router = require("express").Router();
const {
  getAllThoughts,
  postThought,
  getSingleThought,
  putSingleThought,
  deleteSingleThought,
  postSingleThoughtReaction,
  deleteSingleThoughtReaction,
} = require("../../controllers/thoughtController.js");

router.route("/").get(getAllThoughts).post(postThought);
router
  .route("/:thoughtID")
  .get(getSingleThought)
  .put(putSingleThought)
  .delete(deleteSingleThought);
router
  .route("/:thoughtID/reactions")
  .post(postSingleThoughtReaction)
  .delete(deleteSingleThoughtReaction);

module.exports = router;
