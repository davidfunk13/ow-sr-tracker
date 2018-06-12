const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema({
    id: {
        type: String, required: true
    },
    Hero: {
        type: String,
    },
    Map: {
        type: String,
    },
    Victory: {
        type: Boolean,
        required: true,
    }
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;