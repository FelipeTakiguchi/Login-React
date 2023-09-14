const mongoose = require('mongoose');
 
const Post = mongoose.model('Post', {
    title: String,
    content: String,
    userId: String, 
})
 
module.exports = Post;