import React from 'react';
import { connect } from 'react-redux';

// When we need an action creator, import it here, and pass it
// into the connect function
import { addTodo, toggleTodo } from '../actions';

class TodoList extends React.Component {
  state = {
    newTodo: ''
  };

  handleChanges = e => {
    this.setState({ newTodo: e.target.value });
  };

  addTodo = e => {
    e.preventDefault();
    this.props.addTodo(this.state.newTodo);
    this.setState({ newTodo: '' });
  };

  toggleTodo = id => {
    this.props.toggleTodo(id);
  };

  render() {
    return (
      <>
        <div className="todos-list">
          {this.props.todoList.map(todo => (
            <h4 key={todo.id} onClick={() => this.toggleTodo(todo.id)}>
              {todo.name}
              {todo.dragonStatus && <i className="fas fa-dragon" />}
            </h4>
          ))}
        </div>
        <input
          type="text"
          name="newTodo"
          value={this.state.newTodo}
          onChange={this.handleChanges}
          placeholder="Add new todo"
        />
        <button onClick={this.addTodo}>Add Todo</button>
      </>
    );
  }
}

// Connecting a component to the Redux store:
//  - Import connect
//  - curry the connect function - connect()()
//  - First invokation takes in mSTP and action creator object
//  - Second invocation takes in the component

const mapStateToProps = state => ({
  todoList: state.todos
});

export default connect(
  mapStateToProps,
  { addTodo, toggleTodo }
)(TodoList);
