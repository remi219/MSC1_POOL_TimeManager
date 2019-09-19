let express = require('express');
let router = express.Router();
let userCtrl = require('../controllers/UserController');
let verifyToken = require('./VerifyToken');

router.post('/login', verifyToken, userCtrl.login);

router.get('/', verifyToken, userCtrl.getUsers);

router.get('/:id', verifyToken, userCtrl.getUserById);

router.post('/', verifyToken, userCtrl.createUser);

router.put('/:id', verifyToken, userCtrl.updateUser);

router.delete('/:id', verifyToken, userCtrl.deleteUser);

module.exports = router;
