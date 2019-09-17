let express = require('express');
let router = express.Router();
let wtCtrl = require('../controllers/WorkingtimeController');

router.get('/', wtCtrl.getAllByUserIdAndRange);

router.get('/:id_user/:id', wtCtrl.getOneByUserIdAndId);

router.post('/:id_user', wtCtrl.createWorkingtime);

router.put('/:id', wtCtrl.updateWorkingtime);

router.delete('/:id', wtCtrl.deleteWorkingtime);

module.exports = router;
