const graphl = require('graphql');
const { GraphQLSchema } = graphl;
const query = require('./query');
const mutation = require('./mutation');

const schema = new GraphQLSchema({
  query,
  mutation
});

module.exports = schema;
