const bodyParser = require('body-parser');
const post = require('./post');
const auth = require('./auth');
const comment = require('./comment');

module.exports = (app) => {
    app.use(
        bodyParser.json(),
        post,
        auth,
        comment
    )
}