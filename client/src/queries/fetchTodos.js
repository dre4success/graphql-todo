import gql from 'graphql-tag';

const query = gql`
  {
    todos {
      id,
      name,
      completed
    }
  }
`;

export default query;