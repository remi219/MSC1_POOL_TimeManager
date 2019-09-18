let express = require('express');
let router = express.Router();
let userCtrl = require('../controllers/UserController');

router.post('/login', userCtrl.login);

router.get('/', userCtrl.getUsers);

router.get('/:id', userCtrl.getUserById);

router.post('/', userCtrl.verifyToken, userCtrl.createUser);

router.put('/:id', userCtrl.updateUser);

router.delete('/:id', userCtrl.deleteUser);

module.exports = router;
