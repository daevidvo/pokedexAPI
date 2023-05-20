const mongoose = require("mongoose");
const { formatTimestamp } = require("../controllers/thoughtController.js");
const reactionSchema = require("./reaction.js");

const thoughtSchema = new mongoose.Schema(
  {
    thoughtText: { type: String, required: true, minLength: 1, maxLength: 280 },
    createdAt: { type: Date, default: Date.now, get: formatTimestamp },
    pokemon: { type: String, required: true },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

thoughtSchema.virtual('getReactionCount').get(function () {
    return this.reactions.length;
})

const thought = mongoose.model("thought", thoughtSchema);

module.exports = thought;
