var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new NoteSchema object
// This is similar to a Sequelize model
var SeasonSchema = new Schema({
  User: {
    type: String,
    required: true
  },
  BattleTag: {
    type: String,
    required: true
  },
  StartingSR: {
    type: Number,
    required: true
  },
  Games: [
    {
      type: Schema.Types.ObjectId,
      ref: "Game"
    }
  ]
});

// This creates our model from the above schema, using mongoose's model method
var Season = mongoose.model("Season", SeasonSchema);

// Export the Note model
module.exports = Season;
