let express = require('express');
let models = require('../models/index');

module.exports = {
    getByUserId: function (req, res) {
        models.Clocking.findOne({
            where: { id: req.params.id },
        }).then(clock => res.json(clock));
    },
    createClock: function (req, res) {
        models.Clocking.create({
            id_user: req.params.id_user,
            status: req.body.clocking.status,
            time: req.body.clocking.time
        }).then(clock => res.status(200).send('Clock successfully created! '+clock))
            .catch(error => res.status(500).send(error));
    },
    updateClock: function (req, res) {
        models.Clocking.update({
            status: req.body.clocking.status,
            time: req.body.clocking.time
        }).then(clock => res.status(200).send('Clock successfully updated! '+clock))
            .catch(error => res.status(500).send(error));
    },
    deleteClock: function (req, res) {
        models.Clocking.destroy({ where: { id_user: req.params.id }})
            .then(clock => res.status(200).send('Clock successfully deleted! '+clock))
            .catch(error => res.status(500).send(error));
    },
    deleteByUserId: function(id_user) {
        models.Clocking.destroy({ where: { id_user: id_user }});
    }
};
