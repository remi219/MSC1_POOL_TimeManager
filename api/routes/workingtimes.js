let express = require('express');
let router = express.Router();
let wtCtrl = require('../controllers/WorkingtimeController');
let cors = require('cors');

router.get('/', cors(), wtCtrl.getAllByUserIdAndRange);

router.get('/:id_user/:id', cors(), wtCtrl.getOneByUserIdAndId);

router.post('/:id_user', cors(), wtCtrl.createWorkingtime);

router.put('/:id', cors(), wtCtrl.updateWorkingtime);

router.delete('/:id', cors(), wtCtrl.deleteWorkingtime);

module.exports = router;
