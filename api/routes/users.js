let express = require('express');
let router = express.Router();
let userCtrl = require('../controllers/UserController');

router.get('/', userCtrl.getUsers);

router.get('/:id', userCtrl.getUserById);

router.post('/', userCtrl.createUser);

router.put('/:id', userCtrl.updateUser);

router.delete('/:id', userCtrl.deleteUser);

module.exports = router;
