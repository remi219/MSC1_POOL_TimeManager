let express = require('express');
let jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
let models = require('../models/index');
const secretkey = 'mysecretkey';

module.exports = {
    login: function(req, res) {
        const hashedPassword = bcrypt.hashSync(req.body.user.password, 8);
        const user = req.body.user;
        jwt.sign({user : user}, secretkey, { expiresIn: '2h'}, (error, token) => {
            res.json({
                token: token
            });
        });
    },
    getUsers: function(req, res) {
        if (Object.keys((req.query)).length !== 0) {
            const email = req.query.email;
            if (email !== undefined) {
                models.User.findOne({
                    where: { email: email }
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
        /*jwt.verify(req.token, secretkey, (error, authData) => {
            if (error) {
                res.json({ status: 403, message: "Forbidden" });
            } else {*/
                models.User.create(req.body.user)
                    .then(user => res.status(200).json({ message: 'User successfully created! ', authData: authData }))
                    .catch(error => res.status(500).send(error));
            /*}
        });*/
    },
    updateUser: function(req, res) {
        models.User.update({
            firstname:  req.body.user.firstname,
            lastname:  req.body.user.lastname,
            email: req.body.user.email,
            password: req.body.user.password,
            id_role: req.body.user.id_role},
            { where: { id: req.params.id }})
            .then(user => res.status(200).send('User successfully updated! '+user))
            .catch(error => res.status(500).json(error));
    },
    deleteUser: function (req, res) {
        models.User.destroy({ where: { id: req.params.id }})
            .then(user => {
                if (user === req.params.id) {
                    res.status(200).send('User successfully deleted! '+user)
                } else {
                    res.status(200).send('No user found with this id '+user)
                }
            })
            .catch(error => res.status(500).send(error));
    }
};
