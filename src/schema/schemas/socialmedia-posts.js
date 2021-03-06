const { 
    GraphQLList,
    GraphQLNonNull,
    GraphQLString
} = require('graphql');
const PostType = require('../types/post');
const resolver = require('../../resolvers/socialmedia-posts');

module.exports = {
  type: new GraphQLList(PostType),
  description: "List of Posts",
  args: {
    interest: {
      description: 'Interest query. Could be #Topic or @User',
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve: resolver
}