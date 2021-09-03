require("dotenv").config();

const jwt = require('jsonwebtoken');

const token = () => {
    return {
        access(id) {
            return jwt.sign({id}, process.env.ACCESS_TOKEN_SECRET, {
                expiresIn: "15m",
            });
        },
        refresh(id) {
            return jwt.sign({id}, process.env.REFRESH_TOKEN_SECRET, {
                expiresIn: "180 days",
            });
        },
        issuance(token, res) {
            return jwt.verify(
                token,
                process.env.REFRESH_TOKEN_SECRET,
                (err, user) => {
                    if (err) res.sendStatus(403)
                    const key = this.access(user.id)
                    return key
                }
            )
        }
    }
}

// middleware
const authenticate = (req, res, next) => {
    if (req.query.id === 'hello') {
        req.authData = {
            status: 200,
            message: 'Correct User Data',
            jwt: {
                accessToken: token().access(req.query.id),
                refreshToken: token().refresh(req.query.id)
            }
        };
    } else {
        req.authData = {
            status: 400,
            message: 'Not Correct User Data'
        };
    }
    next();
}

const authenticateAccessToken = (req, res, next) => {
    let authHeader = req.headers["authorization"];
    let token = authHeader && authHeader.split(" ")[1];

    if (!token) return res.sendStatus(400);

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, user) => {
        if (error) return res.sendStatus(403);

        req.user = user;
        next();
    });
}

module.exports = {
    token,
    authenticate,
    authenticateAccessToken
}
