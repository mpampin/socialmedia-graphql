const { GraphQLSchema, GraphQLObjectType } = require("graphql");
const helloWorld = require('./schemas/helloworld');

const BaseType = (services) => {
    return new GraphQLObjectType({
      name: 'Root',
      fields: () => (services)
    })
  }

module.exports = new GraphQLSchema({
    query: BaseType({
        helloWorld
    })
});