// Modules
const router = require('express').Router();


router.use('/user', require('./user'))
router.use('/desc', require('./desc'))
router.use('/auth', require('./user/auth'))

module.exports = router;
