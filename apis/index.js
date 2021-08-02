// Modules
const router = require('express').Router();


// Require Files
const user = require('./user');

router.use('/user', user)

module.exports = router;
