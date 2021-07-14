const config = require('config');
const jwt = require('jsonwebtoken');

function auth(req, res, next) {
    const token = req.header('x-auth-token');

    //Check for token

    if (!token) {
        res.status(401).json({ msg: "No Token" })
    }

    try {
        const decode = jwt.verify(token, config.get('jwtSecret'))

        //Add user from payload

        req.user = decode
        console.log(req.user)

        next()

    } catch (e) {
        res.status(400).json({ msg: 'Token is not valid' })
    }


}

module.exports = auth;