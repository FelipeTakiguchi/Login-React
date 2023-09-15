const express = require('express');
const LikeController = require('../controllers/LikeController');
const router = express.Router();
 
router
    .post('/createOrUpdate', LikeController.createOrUpdateLike)
 
module.exports = router;