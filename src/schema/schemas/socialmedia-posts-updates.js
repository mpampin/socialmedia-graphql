const { 
    GraphQLList,
    GraphQLNonNull,
    GraphQLString
} = require('graphql');
const PostType = require('../types/post');
const postPubSub = require('../../utils/postPubSub');

module.exports = {
  type: new GraphQLList(PostType),
  description: "List of Posts",
  args: {
    interest: {
      description: 'Interest query. Could be #Topic or @User',
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve: (data) => {
    return data;
  },
  subscribe: (data, { interest }) => {
    return postPubSub.asyncIterator(interest)
  }
}