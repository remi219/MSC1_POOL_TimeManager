let express = require('express');
let models = require('../models/index');
let Sequelize = require('sequelize');

module.exports = {
    getAllByUserIdAndRange: function (req, res) {
        console.log(">>>> getAllByUserIdAndRange - req.query = ", req.query);
        const id_user = req.query.id_user;
        const start = req.query.start;
        const end = req.query.end;
        models.Workingtime.findAll({
            where: {
                id_user: id_user,
                start: { [Sequelize.Op.gte]: start },
                end: { [Sequelize.Op.lte]: end }
            }
        }).then(wt => {
            res.status(200).json(wt)
        }).catch(error => {
            res.status(500).json(error)
        });
    },
    getOneByUserIdAndId: function (req, res) {
        models.Workingtime.findOne({
            where: { id: req.params.id },
            and: { id_user: req.params.id_user }
        }).then(wt => {
            res.status(200).json(wt);
        }).catch(error => {
            console.log(">>>> getOneByUserIdAndId ERROR : ", error);
            res.status(200).json(error);
        });
    },
    createWorkingtime: function (req, res) {
        console.log(">>>>> createWorkingtime - req.body = ", req.body);
        models.Workingtime.create({
            id_user: req.params.id_user,
            start: req.body.start,
            end: req.body.end
        }).then(wt => {
            console.log(">>>>> createWT OK : ", wt);
            res.status(200).json(wt);
        }).catch(error => {
            console.log(">>>>> createWT ERROR : ", error);
            res.status(500).json(error);
        });
    },
    updateWorkingtime: function (req, res) {
        console.log(">>>> updatewt - req.body = ", req.body);
        models.Workingtime.update({
            id_user: req.body.workingtime.id_user,
            start: req.body.workingtime.start,
            end: req.body.workingtime.end
        },{
            where: { id: req.params.id }
        }).then(wt => {
            res.status(200).json(wt)
        }).catch(error => {
            console.log(">>>> updatewt - ERROR : ", error);
            res.status(500).json(error);
        });
    },
    deleteWorkingtime: function (req, res) {
        models.Workingtime.destroy({ where: { id: req.params.id }})
            .then(wt => res.status(200).send('Workingtime successfully deleted! '+wt))
            .catch(error => res.status(500).json(error));
    },
    deleteByUserId: function(id_user) {
        models.Workingtime.destroy({ where: { id_user: id_user }});
    }
};
