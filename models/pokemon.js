const mongoose = require("mongoose");

const pokemonSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^\w+@\w+.\w{2,4}$/, "Please enter a valid email address"], // email regex for word@word.word
    },
    thought: [{ type: mongoose.Schema.Types.ObjectId, ref: "thought" }],
    friends: [{ type: mongoose.Schema.Types.ObjectId, ref: "pokemon" }],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

pokemonSchema.virtual('getFriendCount').get(function () {
    return this.friends.length;
})

const pokemon = mongoose.model("pokemon", pokemonSchema);

module.exports = pokemon;
