
function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        req.token = bearerHeader.split(' ')[1];
        next();
    } else {
        res.json({
            status: 401,
            message: "Access denied"
        });
    }
}

module.exports = verifyToken;
