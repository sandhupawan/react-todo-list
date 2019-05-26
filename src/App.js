import React, { Component } from "react";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInputs from "./Components/TodoInputs";
import TodoList from "./Components/TodoList";

class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: "",
    editItem: false
  };
  handleChange = e => {
    this.setState({
      item: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item
    };
    const updatedItem = [...this.state.items, newItem];
    this.setState({
      items: updatedItem,
      item: "",
      id: uuid(),
      editItem: false
    });
  };

  clearList = () => {
    console.log("clear list");
  };

  handleEdit = id => {
    console.log(`handle edit ${id}`);
  };

  handleDelete = id => {
    console.log(`handle delete ${id}`);
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-captilize text-center">todo list</h3>
            <TodoInputs
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleEdit={this.handleEdit}
              handleDelete={this.handleDelete}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
