const mongoose = require('mongoose');
 
const Comment = mongoose.model('Comment', {
    content: String,
    owner: String,
})
 
module.exports = Comment;