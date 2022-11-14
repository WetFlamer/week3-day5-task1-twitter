const Users = require('../models/Users.model')

module.exports.usersController = {
    addUser: (req, res) => {
        Users.create({
            name: req.body.name,
            bio: req.body.bio
        }).then(() => {
            res.json("Пользователь добавлен");
        })
    },
    deleteUser: (req, res) => {
        Users.findByIdAndDelete(req.params.user).then( () => {
            res.json('Пользователь удалён')
        })
    }
}