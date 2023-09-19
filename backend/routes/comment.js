const express = require('express');
const router = express.Router();
const CommentController = require('../controllers/CommentController');
 
router
    .get('/', CommentController.getAll)
    .get('/:id', CommentController.getCommentById)
    .post('/', CommentController.create)
    .patch('/:id', CommentController.updateComment)
    .delete('/:id', CommentController.deleteById)

module.exports = router