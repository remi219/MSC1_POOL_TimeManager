let express = require('express');
let router = express.Router();
let teammemberCtrl = require('../controllers/TeamMemberController');
let verifyToken = require('../Auth/VerifyToken');

router.get('/', teammemberCtrl.getAll); // administrators

router.get('/:id', teammemberCtrl.getById); // all

router.get('/:id', teammemberCtrl.getAllByUserId);

router.post('/', teammemberCtrl.joinTeam); // all

router.delete('/:id', teammemberCtrl.leaveTeam); // all

module.exports = router;
