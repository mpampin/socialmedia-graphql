const { 
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLList,
    GraphQLString
} = require('graphql');

const EmbeddedInfo = require('./embedded-info');

const PostType = new GraphQLObjectType({
    name: "PostType",
    description: "Single Post Type",
    fields: {
        user: {
            description: "User of the post",
            type: new GraphQLNonNull(GraphQLString)
        },
        message: {
            description: "User of the post",
            type: new GraphQLNonNull(GraphQLString)
        },
        hashtags: {
            description: "User of the post",
            type: new GraphQLList(GraphQLString)
        },
        embedInfo: {
            description: "Post embedded info",
            type: EmbeddedInfo
        }
    }
});

module.exports = PostType;