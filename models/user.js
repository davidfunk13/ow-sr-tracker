const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    BattleTag: {
        type: String,
        required: true,
    },
    StartingSR: {
        type: Number,
        required: true,
    },
    HerosFocused: {
        type: Array,
        required: true,
    }
}, {timestamps: Date});

const User = mongoose.model('User', UserSchema);

module.exports = User;