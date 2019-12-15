import React from 'react';
import logo from './logo.svg';
import './App.css';
import {ToDoControl, ToDo} from './components/ToDo'
import  ToDoService from './services/todoService'
import './styles.css'

class App extends React.Component{
   state: {todos: ToDo[]} = {
     todos: []
   };

   async componentDidMount() {
    const todolist: ToDo[] = await ToDoService.loadToDos();
    this.setState({todos : todolist});
  }
  render(){
    return <React.Fragment>
      <ToDoControl todolist = {this.state.todos} />
    </React.Fragment>
  }

}

export default App;