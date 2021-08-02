const {names} = require("../lib/names");
const router = require('express').Router();

router.get('/', (req, res) => {


    let jsonfile = []
    for(let i = 0 ; i <= 20 ; i++){
        let data = {
            userid : i,
            email : 'test@test.com',
            pass : '@3jdfa#$42dkaf@3',
            name : names[i*200],
            ava : 'noHave',
            age : 21 + parseInt(i),
            sex : i%3 === 0 ? 'male' : 'female',
        }
        jsonfile.push(data)
    }

    res.json(jsonfile);
})

module.exports = router;
