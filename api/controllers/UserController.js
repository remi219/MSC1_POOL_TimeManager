let express = require('express');
let jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
let models = require('../models/index');
const secretkey = 'mysecretkey';

module.exports = {
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
    login: function(req, res) {
        const hashedPassword = bcrypt.hashSync(req.body.user.password, 8);
        const user = req.body.user;
        const passwordIsValid = bcrypt.compareSync(hashedPassword, user.password);
        if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });
        jwt.sign({ user: user }, secretkey, { expiresIn: '2h'}, (error, token) => {
            if (error) return res.status(403).send(error);
            return res.json({ token: token });
        });
    },
    createUser: function(req, res) {
        jwt.verify(req.token, secretkey, (error, authData) => {
            if (error) {
                res.json({ status: 401, message: "Unauthorized" });
            } else {
                models.User.create(req.body.user)
                    .then(res.status(200).json({ message: 'User successfully created! ', authData: authData }))
                    .catch(error => res.status(500).send(error));
            }
        });
    },
    signup: function(req, res) {
        models.User.create(req.body.user)
            .then(user => res.status(200).json({ message: 'User successfully created! ', user: user }))
            .catch(error => res.status(500).send(error));
    },
    updateUser: function(req, res) {
        jwt.verify(req.token, secretkey, (error, authData) => {
            if (error) {
                res.status(401).json({ status: 401, message: "Unauthorized" });
            } else {
                models.User.update({ user: req.body.user }, { where: { id: req.params.id } })
                    .then(res.status(200).json({ message:'User successfully updated! ', authData: authData }))
                    .catch(error => res.status(500).json(error))
            }
        });
    },
    deleteUser: function (req, res) {
        if (req.params.id !== '1') {
            models.User.destroy({ where: { id: req.params.id }})
                .then(user => {
                    if (user === req.params.id) {
                        res.status(200).send('User successfully deleted! '+user)
                    } else {
                        res.status(200).send('No user found with this id '+user)
                    }
                })
                .catch(error => res.status(500).send(error));
        } else {
            res.status(403).send('Admin user #1 cannot be deleted');
        }
    }
};
