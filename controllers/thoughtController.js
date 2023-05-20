const { pokemon, thought } = require("../models");

function formatTimestamp(timestamp) {
  const date = new Date(timestamp);
  return date;
}

async function getAllThoughts(req, res) {
  try {
    const thoughtData = await thought.find();
    res.status(200).json(thoughtData);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function postThought(req, res) {
  try {
    const thoughtData = await thought.create(req.body);
    res.status(200).json(thoughtData);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function getSingleThought(req, res) {
  try {
    const thoughtData = await thought.findOne({ _id: req.params.thoughtID });
    if (!thoughtData) {
      res.status(500).json({ message: "no thought with this id exists" });
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
        .status(500)
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
        .status(500)
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
        $set: {
          reactions: {
            reactionBody: req.body.reactionBody,
            pokemon: req.body.pokemon,
          },
        },
      }
    );
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
      res
        .status(500)
        .json({
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
  formatTimestamp,
  getAllThoughts,
  postThought,
  getSingleThought,
  putSingleThought,
  deleteSingleThought,
  postSingleThoughtReaction,
  deleteSingleThoughtReaction,
};
