const Twitts = require('../models/Twitts.model')

module.exports.twittsController = {
    addTwitt: (req, res) => {
        Twitts.create({
            user: req.body.user,
            text: req.body.text,
            likes: req.body.likes
        }).then(() => {
            res.json("Твитт добавлен");
        })
    },
    deleteTwitt: (req, res) => {
        Twitts.findByIdAndRemove(req.params.twittId).then(twitts => {
            res.json(twitts)
        })
    },
    updateTwitt: (req, res) => {
        Twitt.findByIdAndUpdate(req.params.twittId, {
            user: req.body.user,
            text: req.body.text,
        },{new: true}).then( twitts => {
            res.json(twitts)
        })
    },
    getTwittbyId: (req, res) => {
        Twitts.findById(req.params.twittId).populate('user').populate('comments')
        .then(twitt => {
            res.json(twitt)
        })
    },
    getTwittbyUserId: (req, res) => {
        Twitts.find({user: req.params.userId})
        .populate('user').populate('comments').then(twitt => {
            res.json(twitt)
        })
    },
    getTwitts: (req, res) => {
        Twitts.find().populate('user').populate('comments')
        .then(twitts => {
            res.json(twitts)
        })
    },
    addLike: (req, res) => {
        Twitt.findByIdAndUpdate({ _id: req.params.twittId }, {$push: {likes: req.body.likes}}, {new: true}).then((a) => { res.json(a) })
    }
}