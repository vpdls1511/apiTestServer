// http://localhost:3000/user

const router = require('express').Router();
const fs = require('fs');

router.get('/list', (req, res) => {
    const jsonFile = fs.readFileSync('dummy/userList.json','utf-8');
    const jsonData = JSON.parse(jsonFile);
    const limit = req.query.limit ? req.query.limit : jsonData.length;

    let sendData = []

    jsonData.forEach( item => {
        item.userid < limit && sendData.push(item);
    })
    res.json(sendData);
})

router.post('/login',(req, res) => {
    const userData = { id : 'test', pw : 'test123' }
    const postData = { id : req.body.id , pw : req.body.pw }



})

module.exports = router;
