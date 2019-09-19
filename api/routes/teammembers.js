let express = require('express');
let router = express.Router();
let teammemberCtrl = require('../controllers/TeamMemberController');
let verifyToken = require('./VerifyToken');

router.get('/', verifyToken, teammemberCtrl.getAll); // administrators

router.get('/:id', verifyToken, teammemberCtrl.getById); // all

router.get('/:id', verifyToken, teammemberCtrl.getAllByUserId);

router.post('/', verifyToken, teammemberCtrl.joinTeam); // all

router.delete('/:id', verifyToken, teammemberCtrl.leaveTeam); // all

module.exports = router;
