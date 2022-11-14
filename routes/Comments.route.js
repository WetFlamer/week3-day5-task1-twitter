const { Router } = require("express");
const { commentsController } = require("../controller/Comments.controller");

const router = Router();
router.post("/comments/add/:twittId", commentsController.addComment)
router.delete("/comments/delete/:twittId", commentsController.deleteComment)
router.get("/comments/:userId", commentsController.getCommentbyUserId)
router.get("/comments/", commentsController.getComments)
module.exports = router