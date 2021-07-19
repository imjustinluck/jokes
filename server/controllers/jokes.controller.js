const Joke = require("../models/jokes.model")

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(allJokes => { res.json({ jokes: allJokes }) })
        .catch(err => res.json({ message: "Something went wrong..." }))
}

module.exports.findOneJoke = (req, res) => {
    Joke.find({ _id: req.params._id })
        .then(oneJoke => { res.json({ oneJoke }) })
        .catch(err => res.json({ message: "Something went wrong..." }))
}

module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJoke => { res.json({ newJoke }) })
        .catch(err => res.json({ message: "Something went wrong..." }))
}

module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate(
        { _id: req.params._id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedJoke => res.json({ joke: updatedJoke }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params._id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

// module.exports.getRandom = (req, res) => {
    
//     Joke.aggregate([{$sample:{size:1}}])
//         .then(result => res.json({ result: result }))
//         .catch(err => res.json({ message: 'Something went wrong', error: err }));
// }