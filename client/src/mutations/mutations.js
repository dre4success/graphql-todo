import gql from 'graphql-tag';

export const updateCompleted = gql`
mutation COMPLETED($id: ID, $done: Boolean) {
  upTodo(id: $id, completed: $done) {
    id
    name
    completed
  }
}
`;

export const deleteOne = gql`
  mutation DELETE($id: ID) {
    removeTodo(id: $id) {
      id
    }
  }
`;