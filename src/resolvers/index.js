const socialmediaPostsResolver = require('./socialmedia-posts');
const socialmediaPostsUpdatesResolver = require('./socialmedia-posts-updates');

module.exports = {
    socialmediaPosts: socialmediaPostsResolver,
    socialmediaPostsUpdates: socialmediaPostsUpdatesResolver
}