let express = require('express');
let router = express.Router();
let userCtrl = require('../controllers/UserController');
let cors = require('cors');
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

router.get('/login', cors(), userCtrl.login);

router.get('/', cors(), userCtrl.getUsers);

router.get('/:id', cors(), userCtrl.getUserById);

router.post('/', cors(), userCtrl.createUser);

router.put('/:id', cors(), userCtrl.updateUser);

router.delete('/:id', cors(), userCtrl.deleteUser);


module.exports = router;
