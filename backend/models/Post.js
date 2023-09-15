const mongoose = require('mongoose');
 
const Post = mongoose.model('Post', {
    title: String,
    content: String,
    owner: String,
    likes: Number
})
 
module.exports = Post;