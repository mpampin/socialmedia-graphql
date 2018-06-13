const socialmediaPostsResolver = require('./socialmedia-posts');

module.exports = {
    helloWorld: () => {
        return "Hello World!"
    },
    socialmediaPosts: socialmediaPostsResolver
}