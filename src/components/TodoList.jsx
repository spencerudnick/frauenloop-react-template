import React, { Component } from 'react';

class TodoList extends Component {
  state = {
    input: "",
    todos: [

    ]
  };

  handleSubmit = e => {
    e.preventDefault();

    // copy todo list
    const editedTodos = [...this.state.todos];

    if (this.state.input.trim() !== '') {
      // add a new todo to the list
      editedTodos.push({ content: this.state.input.trim() });

      // save the updated list and reset `input`
      this.setState({
        todos: editedTodos,
        input: ''
      });
    }
  };

  onChange = e => {
    this.setState({
      input: e.target.value
    });
  };

  handleDelete = (indexToDelete) => {

    // METHOD 1
    // copy todo list
    const editedTodos = [...this.state.todos];
    // splice the index of the clicked item
    editedTodos.splice(indexToDelete, 1);

    // METHOD 2
    // make a copy of the todo list, but without the clicked item
    // const editedTodos = this.state.todos.filter((item, index) => {
    //   return indexToDelete !== index;
    // });

    // save the updated todo list to state
    this.setState({
      todos: editedTodos
    });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.input}
            onChange={this.onChange}
          ></input>
          <button>save todo</button>
        </form>
        <ul>
          {this.state.todos.map((item, index) => (
            <li key={index}>{item.content}
              <span className="delete-container">
                <button
                  type="button"
                  className="delete"
                  onClick={() => {
                    this.handleDelete(index);
                  }}>X</button>
              </span>
            </li>
          ))}
        </ul>

      </>
    );
  }
}

export default TodoList;