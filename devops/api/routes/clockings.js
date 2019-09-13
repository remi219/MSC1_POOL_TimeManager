let express = require('express');
let router = express.Router();
let clockCtrl = require('../controllers/ClockingController');

router.get('/:id', clockCtrl.getUserById);

router.post('/', clockCtrl.createUser);

/*router.put('/:id', clockCtrl.updateClock);

router.delete('/:id', clockCtrl.deleteClock);*/

module.exports = router;
