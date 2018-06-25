const { GraphQLSchema, GraphQLObjectType } = require("graphql");
const socialmediaPosts = require('./schemas/socialmedia-posts');
const socialmediaPostsUpdates = require('./schemas/socialmedia-posts-updates');

const BaseType = (name, services) => {
    return new GraphQLObjectType({
      name,
      fields: services
    })
  }

module.exports = new GraphQLSchema({
    query: BaseType('Query', {
        socialmediaPosts
    }),
    subscription: BaseType('Subscription', {
        socialmediaPostsUpdates: socialmediaPostsUpdates
    })
});