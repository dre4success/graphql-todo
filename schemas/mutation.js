const graphql = require('graphql');
const { GraphQLBoolean, GraphQLID, GraphQLString, GraphQLObjectType } = graphql;
const { updateTodo, deleteTodo, createTodo } = require('./resolvers');
const TodoType = require('./types');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    makeTodo: {
      type: TodoType,
      args: {
        name: { type: GraphQLString }
      },
      resolve: createTodo
    },
    removeTodo: {
      type: TodoType,
      args: {
        id: { type: GraphQLID }
      },
      resolve: deleteTodo
    },
    upTodo: {
      type: TodoType,
      args: {
        id: { type: GraphQLID },
        completed: { type: GraphQLBoolean }
      },
      resolve: updateTodo
    }
  }
});

module.exports = mutation;
