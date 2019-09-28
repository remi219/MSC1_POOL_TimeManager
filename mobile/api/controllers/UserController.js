let express = require('express');
/*let jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');*/
let models = require('../models/index');
const secretkey = 'mysecretkey';
let clockCtrl = require('../controllers/ClockingController');
let wtCtrl = require('../controllers/WorkingtimeController');
let teammemberCtrl = require('../controllers/TeamMemberController');

module.exports = {
    login: function(req, res) {
        /*const hashedPassword = bcrypt.hashSync(req.body.user.password, 8);
        const user = req.body.user;
        jwt.sign({user : user}, secretkey, { expiresIn: '2h'}, (error, token) => {
            res.json({
                token: token
            });
        });*/
        // Mock route to test link front-api:
        console.log(">>>> req.query = ", req.query);
        const email = req.query.email;
        const password = req.query.password;
        models.User.findOne({
            where: {
                email: email,
                password: password
            }
        }).then(user => {
            if (user !== undefined) {
                res.status(200).send(user);
            } else {
                res.status(404).send('User not found');
            }
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
        models.User.findOne({
            where: { id: req.params.id }
        }).then(user => res.json(user));
    },
    getUserByEmail: function(req, res) {
        console.log(">>>>> getUserByEmail: ", req.body.email);
        models.User.findOne({
            where: { email: req.body.email }
        }).then(user => res.json(user));
    },
    /*login: function(req, res) {
        const hashedPassword = bcrypt.hashSync(req.body.user.password, 8);
        const user = req.body.user;
        const passwordIsValid = bcrypt.compareSync(hashedPassword, user.password);
        if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });
        jwt.sign({ user: user }, secretkey, { expiresIn: '2h'}, (error, token) => {
            if (error) return res.status(403).send(error);
            return res.json({ token: token });
        });
    },*/
    createUser: function(req, res) {
        /*jwt.verify(req.token, secretkey, (error, authData) => {
            if (error) {
                res.json({ status: 401, message: "Unauthorized" });
            } else {*/
        console.log(">>>>>>>> req.body = ", req.body);
        models.User.create(req.body)
            .then(user => { res.json(user); })
            .catch(error => res.status(500).send(error));
        /*}
    });*/
    },
    signup: function(req, res) {
        models.User.create(req.body.user)
            .then(user => res.status(200).send(user))
            .catch(error => res.status(500).send(error));
    },
    updateUser: function(req, res) {
        /*jwt.verify(req.token, secretkey, (error, authData) => {
            if (error) {
                res.status(401).json({ status: 401, message: "Unauthorized" });
            } else {*/
        models.User.update({ user: req.body.user }, { where: { id: req.params.id } })
            .then(res.status(200).json({ message:'User successfully updated!' /*, authData: authData*/ }))
            .catch(error => res.status(500).json(error));
        /*}
    });*/
    },
    deleteUser: function (req, res) {
        const id_user = req.params.id;
        if (id_user !== '1') {
            clockCtrl.deleteByUserId(id_user);
            wtCtrl.deleteByUserId((id_user));
            teammemberCtrl.deleteByUserId(id_user);
            models.User.destroy({ where: { id: id_user }
            }).then(user => {
                    res.status(200).send('User successfully deleted! '+id_user);
                }).catch(error => res.status(500).send(error));
        } else {
            res.status(403).send('Admin user #1 cannot be deleted');
        }
    }
};
