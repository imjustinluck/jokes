const mongoose = require('mongoose');

const JokesSchema = new mongoose.Schema({
    setup: {
    type: String,
    required: [true, "Tell us a joke silly!"],
    minlength: [10, "Joke must be at least 10 characters long."]
    },
    punchline: {
    type: String,
    required: [true, "What's the punchline?"],
      minlength: [3, "Punch lines must be characters long"]
    }
}, {timestamps: true});

const Joke = mongoose.model('Joke', JokesSchema);

module.exports = Joke;