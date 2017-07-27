import React, { Component } from 'react';
import TodoList from './TodoList.jsx';
import axios from 'axios';

class App extends Component {
  constructor() {
    super()

    this.state = {
      todos:[],
      item: ''
    }
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleOnDelete = this.handleOnDelete.bind(this);
  }
  // componentDidMount(){
  //   axios.get('http://localhost:3000/api/todos')
  //     .then(data => {
  //       res.send(data)
  //     })
  //     .catch(err => {
  //       res.send(err)
  //     })
  // }

  handleOnChange(event){
    this.setState({
      item: event.target.value
    })
  }

  handleOnSubmit(event){
    event.preventDefault();
    axios.post('http://localhost:3000/api/todos', {
      item: this.state.item
    })
    .then(data => {
      this.setState({
        todos: data.data,
        item: ''
      })
    })
    .catch(err => {
      console.log(err)
    })
  }

  handleOnDelete(item, key){
    console.log(item, key)
    this.state.todos.splice(key,1);
    axios.delete(`http://localhost:3000/api/todos/${key}`)
      .then(data => {
        this.setState({
        todos: this.state.todos
      })
    })
  }

  render() {
    return (
      <div>
        <form>
          <input onChange={this.handleOnChange} value={this.state.item} />
          <button onClick={this.handleOnSubmit}>Add</button>
          <TodoList todos={this.state.todos} handleOnDelete={this.handleOnDelete}/>
        </form>
      </div>
    );
  }
}

export default App;