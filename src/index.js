const express = require('express');
const {
  graphqlExpress,
  graphiqlExpress,
} = require('apollo-server-express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { execute, subscribe } = require('graphql');
const { createServer } = require('http');
const { SubscriptionServer } = require('subscriptions-transport-ws');

const schema = require('./schema');
const config = require('../config');
const pubSub = require('./utils/postPubSub');

var app = express();
app.use('*', cors(), bodyParser.json());

app.use('/graphql', bodyParser.json(), graphqlExpress({
  schema
}));

app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
  subscriptionsEndpoint: `ws://localhost:${config.port}/subscriptions`
}));

app.put('/posts', function(req, res) {
  // TODO: validar posts
  pubSub.publish(req.query.interest, req.body);
  res.send();
});

const ws = createServer(app);
ws.listen(config.port, () => {
  console.log(`Apollo Server is now running on http://localhost:${config.port}`);

  new SubscriptionServer({
    execute,
    subscribe,
    schema
  }, {
    server: ws,
    path: '/subscriptions',
  });
});
