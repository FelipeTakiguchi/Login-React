const express = require('express');
const router = express.Router();
const CommentController = require('../controllers/CommentController');
 
router
    .post('/', CommentController.create)
    .post('/updateLikes', CommentController.updateLike)
module.exports = router