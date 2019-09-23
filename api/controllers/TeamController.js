let express = require('express');
//let jwt = require('jsonwebtoken');
let models = require('../models/index');
let teammemberCtrl = require('../controllers/TeamMemberController');

module.exports = {
    getById: function (req, res) {
        models.Team.findOne({ where: { id: req.params.id },
        }).then(team => res.json(team));
    },
    createTeam: function (req, res) {
        models.Team.create(req.body.team)
            .then(res.status(200).json({ message: 'Team successfully created! '/*, authData: authData*/ }))
            .catch(error => res.status(500).send(error));
    },
    editTeam: function (req, res) {
        models.Team.update(
            { name: req.body.team.name },
            { where: { id: req.params.id }})
            .then(res.status(200).json({ message: 'Team successfully updated! '/*, authData: authData*/ }))
            .catch(error => res.status(500).send(error));
    },
    deleteTeam: function (req, res) {
        // first find and delete all TeamMembers where id_team = id_team
        const id_team = req.params.id;
        teammemberCtrl.deleteByTeamId(id_team);
        models.Team.destroy({
            where: { id: id_team }
        }).then(id => {
            if (id === req.params.id) {
                res.status(200).send('Team successfully deleted! ');
            } else {
                res.status(200).send('No team found with this id ');
            }
        });
    }
};
