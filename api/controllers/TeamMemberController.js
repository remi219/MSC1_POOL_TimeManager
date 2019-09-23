let express = require('express');
let jwt = require('jsonwebtoken');
let models = require('../models/index');
let verifyToken = require('../Auth/VerifyToken');

module.exports = {
    getAllByTeamId: function (req, res) {
        models.TeamMember.findAll({ where: {id_team: req.body.id_team }}).then((tm) => res.json(tm));
    },
    getAllByUserId: function (req, res) {
        models.TeamMember.findAll({ where: {id_user: req.body.id_user }}).then((tm) => res.json(tm));
    },
    addUserToTeam: function (req, res) {
        const id_user = req.body.id_user;
        const id_team = req.body.id_team;
        Models.TeamMember.create({
            teammember: {
                id_user: id_user,
                id_team: id_team
            }
        }).then(res.status(200).json({ message: 'User successfully added to team! '/*, authData: authData*/ }))
            .catch(error => res.status(500).send(error));
    },
    removeUserFromTeam: function (req, res) {
        const id_user = req.body.id_user;
        const id_team = req.body.id_team;
        models.TeamMember.destroy({ where: { id_user: id_user, id_team: id_team }})
            .then(res.status(200).send('User successfully deleted!'))
            .catch(error => res.status(500).send(error));
    },
    deleteById: function (id) {
        models.TeamMember.destroy({ where: {id: id } });
    }
};
