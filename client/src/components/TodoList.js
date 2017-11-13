import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import query from '../queries/fetchTodos';
import { updateCompleted, deleteOne } from '../mutations/mutations';

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = { completed: false };
  }

  handleClick(id) {
    this.setState(() => ({ completed: !this.state.completed }));
    this.props
      .upTodo({
        variables: { id, done: this.state.completed }
      })
      .then(() => this.props.data.refetch());
  }

  deleteById(e, id) {
    e.stopPropagation();
    this.props.removeTodo({
      variables: {id}
    }).then(() => this.props.data.refetch())
  }

  renderTodos() {
    return this.props.data.todos.map(todo => {
      return (
        <li
          key={todo.id}
          className={`task ${todo.completed ? 'done' : ''}`}
          onClick={() => this.handleClick(todo.id)}
        >
          {todo.name}
          <span onClick={e => this.deleteById(e, todo.id)}>X</span>
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

export default compose(
  graphql(updateCompleted, { name: 'upTodo' }),
  graphql(deleteOne, { name: 'removeTodo' }),
  graphql(query)
)(TodoList);
