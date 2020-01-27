import React from "react";
import Todo from "./components/todo";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "Alex",
      age: 15,
      tweets: [
        { id: 1, user: "alex", text: "1" },
        { id: 2, user: "john", text: "2" }
      ],
      todos: [{ content: "buy milk" }, { content: "leran react" }]
    };
  }

  handleClick(e) {
    console.log(e, "you clicked the button");
  }
  handleMouseOver() {
    console.log("You hovered ");
  }

  handleSubmit = e => {
    e.preventDefault();
    const editedTodos = [...this.state.todos];
    editedTodos.push({ content: e.target.value });
    this.setState({
      todos: editedTodos
    });
    console.log("You submitted");
  };

  onChange = e => {
    console.log(e.target.value);
    const editedTodos = [...this.state.todos];
    editedTodos.push({ content: e.target.value });
    this.setState({
      todos: editedTodos
    });

    this.setState({
      name: e.target.value
    });
  };

  render() {
    return (
      <div>
        <h1>Frauenloop React Template</h1>
        <p>my Name is :{this.state.name}</p>
        <p>my age :{this.state.age}</p>
        <button onClick={this.handleClick}>click me</button>
        <button onMouseOver={this.handleMouseOver}>Hover over Me!</button>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.name}
            onChange={this.onChange}
          ></input>
        </form>
        <ul>
          {this.state.tweets.map((item, index) => (
            <li key={index}>
              {item.user}: {item.text}
            </li>
          ))}
        </ul>
        {/*  */}
        <Todo age={42} todoList={this.state.todos} />
      </div>
    );
  }
}

export default App;
