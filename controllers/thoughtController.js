const { pokemon, thought } = require("../models");

async function getAllThoughts(req, res) {
  try {
    const thoughtData = await thought.find({});
    res.status(200).json(thoughtData);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function postThought(req, res) {
  try {
    const thoughtData = await thought.create(req.body);
    const userData = await pokemon.findOneAndUpdate(
      { name: req.body.pokemon },
      { $push: { thought: thoughtData._id } }, // adds the new thought's _id to the thought array that's present in each pokemon's document
      { new: true }
    );

    if (thoughtData && userData) {
      res.status(200).json(userData);
    } else {
      res.status(400).json({message: 'error in posting thought check if pokemon exists or thought text'})
    }
  } catch (err) {
    res.status(500).json(err);
  }
}

async function getSingleThought(req, res) {
  try {
    const thoughtData = await thought.findOne({ _id: req.params.thoughtID });
    if (!thoughtData) {
      res.status(400).json({ message: "no thought with this id exists" });
    } else {
      res.status(200).json(thoughtData);
    }
  } catch (err) {
    res.status(500).json(err);
  }
}

async function putSingleThought(req, res) {
  try {
    const thoughtData = await thought.findOneAndUpdate(
      { _id: req.params.thoughtID },
      { $set: req.body },
      { runValidators: true, new: true }
    );
    if (!thoughtData) {
      res
        .status(404)
        .json({ message: "no thought with this id exists failed to update" });
    } else {
      res.status(200).json(thoughtData);
    }
  } catch (err) {
    res.status(500).json(err);
  }
}

async function deleteSingleThought(req, res) {
  try {
    const thoughtData = await thought.findOneAndDelete({
      _id: req.params.thoughtID,
    });
    if (!thoughtData) {
      res
        .status(404)
        .json({ message: "no thought with this id exists failed to delete" });
    } else {
      res.status(200).json({ message: "successfully deleted thought" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
}

async function postSingleThoughtReaction(req, res) {
  try {
    const reactionData = await thought.findOneAndUpdate(
      { _id: req.params.thoughtID },
      {
        $push: { // adds the reaction information to the reactions array of the associated thought document
          reactions: {
            reactionBody: req.body.reactionBody,
            pokemon: req.body.pokemon,
          },
        },
      },
      { runValidators: true, new: true }
    );

    if (!reactionData) {
      res
        .status(404)
        .json({
          message: "no thought with this id exists failed to add reaction",
        });
    } else {
      res.status(200).json(reactionData);
    }
  } catch (err) {
    res.status(500).json(err);
  }
}

async function deleteSingleThoughtReaction(req, res) {
  try {
    const reactionData = await thought.findOneAndUpdate(
      { _id: req.params.thoughtID },
      { $pull: { reactions: { reactionId: req.body.reactionId } } },
      { runValidators: true, new: true }
    );
    if (!reactionData) {
      res.status(404).json({
        message: "no thought with this id exists failed to remove reaction",
      });
    } else {
      res
        .status(200)
        .json({ message: "successfully removed reaction from this thought" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
}

module.exports = {
  getAllThoughts,
  postThought,
  getSingleThought,
  putSingleThought,
  deleteSingleThought,
  postSingleThoughtReaction,
  deleteSingleThoughtReaction,
};
