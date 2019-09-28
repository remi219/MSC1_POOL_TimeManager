let express = require('express');
let router = express.Router();
let teammemberCtrl = require('../controllers/TeamMemberController');
let cors = require('cors');
/*
let verifyToken = require('../Auth/VerifyToken');

router.get('/', verifyToken, teammemberCtrl.getAllByTeamId);

router.get('/:id', verifyToken, teammemberCtrl.getAllByUserId);

router.post('/', verifyToken, teammemberCtrl.addUserToTeam());

router.delete('/:id', verifyToken, teammemberCtrl.removeUserFromTeam());
*/

router.get('/', cors(), teammemberCtrl.getAllByTeamId);

router.get('/:id', cors(), teammemberCtrl.getAllByUserId);

router.post('/', cors(), teammemberCtrl.addUserToTeam());

router.delete('/:id', cors(), teammemberCtrl.removeUserFromTeam());


module.exports = router;
