import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import query from '../queries/fetchTodos';

class TodoList extends Component {
  state = { completed: false };

  renderTodos() {
    return this.props.data.todos.map(todo => {
      return (
        <li key={todo.id} className="task">
          {todo.name}
          <span>X</span>
        </li>
      );
    });
  }

  render() {
    if (this.props.data.loading) {
      return <p>loading...</p>;
    }
    return <ul className="list">{this.renderTodos()}</ul>;
  }
}

export default graphql(query)(TodoList);
