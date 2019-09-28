let express = require('express');
let router = express.Router();
let teammemberCtrl = require('../controllers/TeamMemberController');
/*
let verifyToken = require('../Auth/VerifyToken');

router.get('/', verifyToken, teammemberCtrl.getAllByTeamId);

router.get('/:id', verifyToken, teammemberCtrl.getAllByUserId);

router.post('/', verifyToken, teammemberCtrl.addUserToTeam());

router.delete('/:id', verifyToken, teammemberCtrl.removeUserFromTeam());
*/

router.get('/', teammemberCtrl.getAllByTeamId);

router.get('/:id', teammemberCtrl.getAllByUserId);

router.post('/', teammemberCtrl.addUserToTeam());

router.delete('/:id', teammemberCtrl.removeUserFromTeam());


module.exports = router;
