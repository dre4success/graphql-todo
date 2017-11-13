const graphl = require('graphql');
const { GraphQLList, GraphQLID, GraphQLObjectType, GraphQLNonNull } = graphl;
const TodoType = require('./types');
const { getTodos, getTodoByID } = require('./resolvers');

const query = new GraphQLObjectType({
  name: 'RootQuery',
  fields: () => ({
    todos: {
      type: new GraphQLList(TodoType),
      resolve: getTodos
    },
    todo: {
      type: TodoType,
      args: {
        id: {type: new GraphQLNonNull(GraphQLID)}
      },
      resolve: getTodoByID
    }
  })
});

module.exports = query;