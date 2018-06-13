const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');
const resolvers = require('./resolvers');

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: resolvers,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');