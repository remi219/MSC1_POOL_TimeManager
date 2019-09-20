let express = require('express');
let router = express.Router();
let teammemberCtrl = require('../controllers/TeamMemberController');
let verifyToken = require('../Auth/VerifyToken');

router.get('/', verifyToken, teammemberCtrl.getAllByTeamId); // administrators

router.get('/:id', verifyToken, teammemberCtrl.getAllByUserId);

router.post('/', verifyToken, teammemberCtrl.joinTeam); // all

router.delete('/:id', verifyToken, teammemberCtrl.leaveTeam); // all

module.exports = router;
