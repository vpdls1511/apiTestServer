// http://localhost:3000/auth/
const router = require('express').Router();

const user = require('../../controller/user')
const {authenticate, token, authenticateAccessToken} = require('../../lib/auth/jwt')

router.route('/user')
    .post(user.userRegister) // 회원가입
    .get( authenticate , user.userLogin ) // 로그인

router.route('/token')
    .get(authenticateAccessToken, (req,res)=>{
        console.log(req.user)
        res.send(req.user)
    })
    .post((req, res) => {
        const refreshToken = req.body.refreshToken;
        if(!refreshToken) return res.sendStatus(403);
        const accessToken = token().issuance(refreshToken, res)
        console.log(accessToken)
        res.json({accessToken})
    })

module.exports = router
