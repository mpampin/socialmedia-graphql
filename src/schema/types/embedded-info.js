const { 
    GraphQLObjectType,
    GraphQLString
} = require('graphql');

const EmbeddedInfo = new GraphQLObjectType({
    name: "EmbeddedInfo",
    description: "Post Embed Data",
    fields: {
        html: {
            type: GraphQLString
        }
    }
});

module.exports = EmbeddedInfo;