var jwt = require("jsonwebtoken");
module.exports.token = function (req, res, next) {
    var token = req.headers.token;
    if(token) {
        jwt.verify(token, 'secretKey', function(err, decoded) {
            if(err) {
                    res.status(403).json({
                    error: err,
                    message: 'Failed to authenticate token'
            });
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
            res.status(401).send({ message: 'No token provided' });
    }
}