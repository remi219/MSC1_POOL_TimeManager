let express = require('express');
let models = require('../models/index');
var Sequelize = require('sequelize');

module.exports = {
    getAllByUserIdAndRange: function (req, res) {
        if (Object.keys((req.query)).length !== 0) {
            let id_user = req.query.id_user;
            let start = req.query.start;
            let end = req.query.end;
            if (id_user !== undefined && start !== undefined && end !== undefined) {
                models.Workingtime.findOne({
                    where: { id_user: id_user },
                    and: {
                        start: {
                            [Sequelize.Op.gte]: start
                        },
                        end: {
                            [Sequelize.Op.lte]: end
                        }
                    }
                }).then((wt) => res.json(wt));
            }
        } else {
            models.Workingtime.findAll().then((users) => res.json(users));
        }
    },
    getOneByUserIdAndId: function (req, res) {
        models.Workingtime.findOne({
            where: { id: req.params.id },
            and: { id_user: req.params.id_user }
        }).then(wt => res.json(wt));
    },
    createWorkingtime: function (req, res) {
        models.Workingtime.create({
                id_user: req.params.id_user,
                start: req.body.workingtime.start,
                end: req.body.workingtime.end
            }).then(wt => res.status(200).send('Workingtime successfully created! '+wt))
            .catch(error => res.status(500).send(error));
    },
    updateWorkingtime: function (req, res) {
        models.Workingtime.update({
            id_user: req.body.workingtime.id_user,
            start: req.body.workingtime.start,
            end: req.body.workingtime.end
        },{
            where: { id: req.params.id }
        }).then(wt => res.status(200).send('Workingtime successfully updated! '+wt))
            .catch(error => res.status(500).send(error));
    },
    deleteWorkingtime: function (req, res) {
        models.Workingtime.destroy({ where: { id: req.params.id }})
            .then(wt => res.status(200).send('Workingtime successfully deleted! '+wt))
            .catch(error => res.status(500).send(error));
    },
    deleteByUserId: function(id_user) {
        models.Workingtime.destroy({ where: { id_user: id_user }});
    }
};
