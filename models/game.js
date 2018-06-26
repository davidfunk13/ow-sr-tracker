const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GameSchema = new Schema({
    Hero: {
        type: String,
        required: true,
    },
    Map: {
        type: String,
        required: true,
    },
    Victory: {
        type: Boolean,
        required: true,
    },
    SRDifference: {
        type: Number,
    
    },
    UpdatedSR: {
        type: Number,
        required: true,
    }
});

const Game = mongoose.model('Game', GameSchema);

module.exports = Game;