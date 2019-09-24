let express = require('express');
let router = express.Router();
let userCtrl = require('../controllers/UserController');
//let verifyToken = require('../Auth/VerifyToken');

/*
router.get('/', verifyToken, userCtrl.getUsers);

router.get('/:id', verifyToken, userCtrl.getUserById);

router.post('/login', verifyToken, userCtrl.login);

router.post('/', verifyToken, userCtrl.createUser);

router.post('/signup', userCtrl.signup);

router.put('/:id', verifyToken, userCtrl.updateUser);

router.delete('/:id', verifyToken, userCtrl.deleteUser);
*/

router.get('/login', userCtrl.login);

router.get('/', userCtrl.getUsers);

router.get('/:id', userCtrl.getUserById);

router.post('/', userCtrl.createUser);

router.put('/:id', userCtrl.updateUser);

router.delete('/:id', userCtrl.deleteUser);


module.exports = router;
