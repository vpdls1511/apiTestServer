// IMG - https://dummyimage.com/
// TEXT - https://www.lipsum.com

const fs = require("fs");
const router = require('express').Router();

router.get('/list', (req, res) => {
    const jsonFile = fs.readFileSync('dummy/desc.json','utf-8');
    const jsonData = JSON.parse(jsonFile);
    const limit = req.query.limit ? req.query.limit : jsonData.length;

    let sendData = []

    jsonData.forEach( item => {
        item.id < limit && sendData.push(item);
    })
    res.json(sendData);
})

module.exports = router
