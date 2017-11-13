import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import query from '../queries/fetchTodos';

class TodoInput extends Component {
  state = {
    task: ''
  };

  onChangeInput = e => {
    const task = e.target.value;
    this.setState(() => ({ task }));
  };

  Enter = e => {
    if (e.key === 'Enter') {
      this.props
        .mutate({
          variables: { todo: this.state.task },
          update: (store, { data: { makeTodo } }) => {
            const data = store.readQuery({ query });
            data.todos.push(makeTodo);
            store.writeQuery({ query, data });
          }
        })
        .then(() => this.setState(() => ({ task: '' })));
    }
  };

  render() {
    return (
      <div className="form">
        <input
          type="text"
          value={this.state.task}
          onChange={this.onChangeInput}
          onKeyPress={this.Enter}
          id="todoInput"
          placeholder="Input your todo here..."
        />
      </div>
    );
  }
}

const mutation = gql`
  mutation ADDTODO($todo: String) {
    makeTodo(name: $todo) {
      id
      name
      completed
    }
  }
`;

export default graphql(mutation)(TodoInput);
