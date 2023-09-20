const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    content: String,
    owner: String,
    time: Date
})

const Comment = mongoose.model('Comment', commentSchema)
 
module.exports = {commentSchema, Comment};