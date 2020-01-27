import React, { Component } from 'react';

class Todo extends Component {
    state = {  }
    render() { 
        return ( <div>
                <p>Todo List</p>
        <p>{this.props.age}</p>
                {this.props.todoList.map((item, index) => (
                    <li key={index}>{item.content}</li>
                ))}
        </div> );
    }
}
 
export default Todo;