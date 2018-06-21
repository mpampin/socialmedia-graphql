const postPubSub = require('../utils/postPubSub');

export default {
    subscribe: (interest) => postPubSub.asyncIterator(interest)
}