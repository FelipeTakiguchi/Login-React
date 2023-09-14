const bodyParser = require('body-parser');
const post = require('./post');
const auth = require('./auth');

module.exports = (app) => {
    app.use(
        bodyParser.json(),
        post,
        auth
    )
}