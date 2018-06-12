const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    uid: {
        type: String,
        required: true,
    },
    games: [
        {
            type: Schema.Types.ObjectId,
            ref: "Game"
        }
    ]
});

const User = mongoose.model('User', UserSchema);

module.exports = User;