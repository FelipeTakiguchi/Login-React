const express = require('express');
const router = express.Router();
const PostController = require('../controllers/PostController');
 
router
    .get('/', PostController.getAll)
    .get('/:id', PostController.getPostById)
    .post('/', PostController.create)
    .patch('/:id', PostController.updatePost)
    .delete('/:id', PostController.deleteById)

module.exports = router