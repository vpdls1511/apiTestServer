// Modules
const router = require('express').Router();


router.use('/user', require('./user'))
router.use('/desc', require('./desc'))

module.exports = router;
