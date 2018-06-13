const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');
const resolvers = require('./resolvers');
const config = require('../config');

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: resolvers,
  graphiql: true,
}));
app.listen(config.port);
console.log(`Running a GraphQL API server at localhost:${config.port}/graphql`);