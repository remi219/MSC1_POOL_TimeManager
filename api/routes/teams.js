let express = require('express');
let router = express.Router();
let teamCtrl = require('../controllers/TeamController');
let cors = require('cors');
//let verifyToken = require('../Auth/VerifyToken');

router.get('/', cors(), teamCtrl.getAll); // administrators

router.get('/:id', cors(), teamCtrl.getById); // all

router.post('/', cors(), teamCtrl.createTeam); // administrators, managers

router.put('/:id', cors(), teamCtrl.editTeam()); // administrators, managers

router.delete('/:id', cors(), teamCtrl.deleteTeam); // administrators, managers

module.exports = router;
