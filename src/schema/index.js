const { GraphQLSchema, GraphQLObjectType } = require("graphql");
const socialmediaPosts = require('./schemas/socialmedia-posts');

const BaseType = (services) => {
    return new GraphQLObjectType({
      name: 'Root',
      fields: services
    })
  }

module.exports = new GraphQLSchema({
    query: BaseType({
        socialmediaPosts
    }),
    subscription: BaseType({
        socialmediaPostsUpdates: socialmediaPosts
    })
});