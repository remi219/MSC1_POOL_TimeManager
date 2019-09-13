let express = require('express');
let models = require('../models/index');

module.exports = {
    getUsers: function(req, res) {
        if (Object.keys((req.query)).length !== 0) {
            let username = req.query.username;
            let email = req.query.email;
            if (username !== undefined && email !== undefined) {
                models.User.findOne({
                    where: { username: username },
                    and: { email: email }
                }).then((user) => res.json(user));
            }
        } else {
            models.User.findAll().then((users) => res.json(users));
        }
    },
    getUserById: function(req, res) {
        models.User.findOne({ where: { id: req.params.id },
        }).then(user => res.json(user));
    },
    createUser: function(req, res) {
        return models.User.create(req.body.user)
            .then(user => res.status(200).send('User successfully created! '+user))
            .catch(error => res.status(500).send(error));
    },
    updateUser: function(req, res) {
        models.User.update({
            username:  req.body.user.username,
            email: req.body.user.email,
            id_role: req.body.user.id_role},
            { where: { id: req.params.id }})
            .then(user => res.status(200).send('User successfully updated! '+user))
            .catch(error => res.status(500).json(error));
    },
    deleteUser: function (req, res) {
        models.User.destroy({ where: { id: req.params.id }})
            .then(user => res.status(200).send('User successfully deleted! '+user))
            .catch(error => res.status(500).send(error));
    }
};
