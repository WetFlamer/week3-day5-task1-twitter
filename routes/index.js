const { Router } = require('express');

const router = Router();

router.use('/', require('./Users.route'))
router.use('/', require('./Twitts.route'))
router.use('/', require('./Comments.route'))
module.exports = router;