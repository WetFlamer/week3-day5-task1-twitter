const { Router } = require("express");
const { twittsController } = require("../controller/Twitts.controller");

const router = Router();
router.post('/twitt/add', twittsController.addTwitt)
router.delete('/twitt/delete/:twittId', twittsController.deleteTwitt)
router.patch('/twitt/edit/:twittId', twittsController.updateTwitt)
router.get('/twitts/:twittId', twittsController.getTwittbyId)
router.get('/twitts/', twittsController.getTwitts)
router.get('/twitts/user/:userId', twittsController.getTwittbyUserId)
router.patch('/twittId/:twittId', twittsController.addLike)
module.exports = router