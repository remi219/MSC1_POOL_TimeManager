let express = require('express');
let router = express.Router();
let teamCtrl = require('../controllers/TeamController');
//let verifyToken = require('../Auth/VerifyToken');

router.get('/', teamCtrl.getAll); // administrators

router.get('/:id', teamCtrl.getById); // all

router.post('/', teamCtrl.createTeam); // administrators, managers

router.put('/:id', teamCtrl.editTeam()); // administrators, managers

router.delete('/:id', teamCtrl.deleteTeam); // administrators, managers

module.exports = router;
