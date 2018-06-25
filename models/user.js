const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    UID:{
        type: String,
        required: true,
    },
    Nickname: {
        type: String,
        required: true,
    },
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