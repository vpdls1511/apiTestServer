exports.userLogin = (req,res) => {
    const userData = req.authData;

    if(userData.status === 200){
        res.json(userData.jwt)
    }else{
        res.send('ERROR')
    }
}
