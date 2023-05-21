const mongoose = require("mongoose");
const { formatTimestamp } = require("../utils/formatTimestamp.js");

const reactionSchema = new mongoose.Schema(
  {
    reactionId: {
      type: mongoose.Types.ObjectId,
      default: () => new mongoose.Types.ObjectId(),
    },
    reactionBody: { type: String, required: true, maxLength: 280 },
    pokemon: { type: String, required: true },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => formatTimestamp(timestamp),
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = reactionSchema;
