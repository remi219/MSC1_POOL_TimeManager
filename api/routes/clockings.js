let express = require('express');
let router = express.Router();
let clockCtrl = require('../controllers/ClockingController');
let cors = require('cors');

router.get('/:id', cors(), clockCtrl.getByUserId);

router.post('/', cors(), clockCtrl.createClock);

router.put('/:id', cors(), clockCtrl.updateClock);

router.delete('/:id', cors(), clockCtrl.deleteClock);

module.exports = router;
