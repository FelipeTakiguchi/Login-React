const express = require('express');
const router = express.Router();
const PostController = require('../controllers/PostController');
 
router
    .get('/', PostController.getAll)
    .get('/:id', PostController.getPostById)
    .post('/', PostController.create)
    .post('/', PostController.create)
    .patch('/:id', PostController.updatePost)
    .patch('/likes/:id', PostController.updateLike)
    .delete('/:id', PostController.deleteById)

module.exports = router