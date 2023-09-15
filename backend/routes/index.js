const bodyParser = require('body-parser');
const post = require('./post');
const auth = require('./auth');
const like = require('../models/Like');

module.exports = (app) => {
    app.use(
        bodyParser.json(),
        post,
        auth,
        like
    )
}