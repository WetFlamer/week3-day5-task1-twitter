const { Router } = require("express");
const { usersController } = require("../controller/Users.controller");

const router = Router();
router.post('/user/add', usersController.addUser)
router.delete('/user/delete/:userId', usersController.deleteUser)
module.exports = router