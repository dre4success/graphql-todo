const express = require('express');
const expressGraphQL = require('express-graphql');
const bodyParser = require('body-parser');
const cors = require('cors');
const schema = require('./schemas');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(
  '/graphql',
  expressGraphQL({
    schema,
    graphiql: true
  })
);

const port = process.env.PORT || 2020;

app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
