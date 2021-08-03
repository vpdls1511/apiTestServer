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
    const userData = { id : 'test', pass : 'test123' }
    const postData = { id : req.body.id , pass : req.body.pass }
    if(userData.id === postData.id){
        if(userData.pass === postData.pass){
            res.json({
                state:true,
                message : 'Match Data'
            })
        }else{
            res.json({
                state:false,
                message:'Mismatched password'
            })
        }
    }else{
        res.json({
            state : false,
            message : 'Mismatched userid'
        })
    }

    res.end()
})


router.post('/register',(req, res) => {
    const postData = {
        userid : req.body.userid,
        pass : req.body.pass,
        name: req.body.name,
        ava: req.body.ava,
        age: req.body.age,
        sex: req.body.sex
    }

    let state = true;
    for(let data in postData) if(!postData[data]) state = false

    if(state) res.json({state : true, message : 'register success'})
    else res.json({state : false, message : 'field is empty'})

    res.end()
})

module.exports = router;
