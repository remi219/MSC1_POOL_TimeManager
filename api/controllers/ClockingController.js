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
    }
};
