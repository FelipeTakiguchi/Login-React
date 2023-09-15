const express = require('express');
const post = require('../routes/post');
const auth = require('../routes/auth')
const like = require('../routes/like')

module.exports = function(app) {
    app.use(express.json());
    app.use('/api/post', post);
    app.use('/api/auth', auth);
    app.use('/api/like', like);
}