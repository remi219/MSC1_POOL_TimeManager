let express = require('express');
let models = require('../models/index');

module.exports = {
    getByUserId: function (req, res) {
        console.log(">>>>> GetByUserId req.params.id = ", req.params.id);
        models.Clocking.findOne({
            where: { id_user: req.params.id },
        }).then(clock => res.json(clock));
    },
    createClock: function (req, res) {
        console.log(">>>> createClock - req.body.clocker = ", req.body.clocker);
        models.Clocking.create(req.body.clocker)
            .then(clock => res.status(200).json(clock))
            .catch(error => res.status(500).json(error));
    },
    updateClock: function (req, res) {
        console.log(">>>> updateClock - req.body = ", req.body);
        models.Clocking.update({
                status: req.body.clocker.status,
                time: req.body.clocker.time
            }, {
                where: { id_user: req.body.clocker.id_user }
            }).then(clock => res.status(200).json(clock))
            .catch(error => res.status(500).json(error));
    },
    deleteClock: function (req, res) {
        models.Clocking.destroy({ where: { id_user: req.params.id }})
            .then(clock => res.status(200).send('Clock successfully deleted! '+clock))
            .catch(error => res.status(500).send(error));
    },
    deleteByUserId: function(id_user) {
        models.Clocking.destroy({
            where: { id_user: id_user }
        }).catch(error => console.log(error));
    }
};
