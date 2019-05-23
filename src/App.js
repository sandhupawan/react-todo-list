import React, { Component } from "react";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInputs from "./Components/TodoInputs";
import TodoList from "./Components/TodoList";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <TodoInputs />
          <TodoList />
        </div>
      </div>
    );
  }
}

export default App;
