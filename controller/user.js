const pool = require('../lib/config/pool')

exports.userRegister = (req,res) => {
    pool.getConnectionPool((conn)=>{
        const sql = 'SELECT * FROM user'
        conn.query(sql , (err, doc)=>{
            if(err) console.log(err)
            conn.release()
            res.send(doc)
        })
    })
}

exports.userLogin = (req,res) => {
    const userData = req.authData;

    if(userData.status === 200){
        res.json(userData.jwt)
    }else{
        res.send('ERROR')
    }
}
