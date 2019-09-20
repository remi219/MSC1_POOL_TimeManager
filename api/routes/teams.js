let express = require('express');
let router = express.Router();
let teamCtrl = require('../controllers/TeamController');
let verifyToken = require('../Auth/VerifyToken');

router.get('/', verifyToken, teamCtrl.getAll); // administrators

router.get('/:id', verifyToken, teamCtrl.getById); // all

router.post('/', verifyToken, teamCtrl.createTeam); // administrators, managers

router.put('/:id', verifyToken, teamCtrl.editTeam()); // administrators, managers

router.delete('/:id', verifyToken, teamCtrl.deleteTeam); // administrators, managers

module.exports = router;
