let jwt = require('jsonwebtoken');
let config = require('../config');

function verifyToken(req, res, next) {
    const token = req.headers['x-access-token'];
    if (!token) {
        return res.status(403).send({ auth: false, message: 'No token provided.' });
    }
    jwt.verify(token, config.secret, function (err, decoded) {
        if (err) {
            return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        }
        req.userId = decoded.id; // if everything is good, save to request for use in other routes
        next();
    });
}

/*verifyToken: function(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        req.token = bearerHeader.split(' ')[1];
        next();
    } else {
        res.json({
            status: 403,
            message: "Access denied"
        })
    }
},*/

module.exports = verifyToken;
