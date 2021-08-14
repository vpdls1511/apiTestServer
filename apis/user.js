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
    const userData = { id : 'test', password : 'test123' } // 임시 로그인 정보
    const userData2 = { id : 'test2', password : 'test123' } // 임시 로그인 정보
    const postData = { id : req.body.id , password : req.body.password } // 받아온 정보
    console.log(postData)
    if(userData.id === postData.id || userData2.id === postData.id){ // id 가 맞는지 검사
        if(userData.password === postData.password || userData2.password === postData.password){ // password 가 맞는지 검사
            req.session.displayName = postData.id // session.id 에 userData.id 를 저장
            req.session.save(()=>{ // 저장 후 실행될 이벤트
                res.json({
                    state:true,
                    message : 'Match Data'
                })
            })
        }else{
            console.log('Mismatched password')
            res.json({
                state:false,
                message:'Mismatched password'
            })
        }
    }else{
        console.log('Mismatched userid')
        res.json({
            state : false,
            message : 'Mismatched userid'
        })
    }
})
router.post('/logout',(req, res) => {
    if(req.session.displayName){
        console.log('Logout')
        req.session.destroy(err => {
            if(err) console.log(err)
        })
        res.end()
    }
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
