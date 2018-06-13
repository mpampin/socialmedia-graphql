const { 
    GraphQLList,
    GraphQLNonNull,
    GraphQLString
} = require('graphql');
const PostType = require('../types/post');

module.exports = {
    type: new GraphQLList(PostType),
    description: "List of Posts",
    args: {
        interest: {
          description: 'Interest query. Could be #Topic or @User',
          type: new GraphQLNonNull(GraphQLString)
        }
    }
}