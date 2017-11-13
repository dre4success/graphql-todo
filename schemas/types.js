const graphql = require('graphql');
const { GraphQLBoolean, GraphQLID, GraphQLObjectType, GraphQLString } = graphql;

const TodoType = new GraphQLObjectType({
  name: 'TodoType',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    completed: { type: GraphQLString },
    createdAt: { type: GraphQLString }
  })
});

module.exports = TodoType;
