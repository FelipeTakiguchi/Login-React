const mongoose = require('mongoose');
 
const Like = mongoose.model('Like', {
    value: Boolean,
    userId: String,
    postId: String,
})
 
module.exports = Like;