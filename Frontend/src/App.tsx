import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import {withRouter} from 'react-router';
import './App.css';
import {ToDoControl} from './components/ToDo'
import NotFound from './components/notFound';
import {NewToDoForm} from './components/NewToDoForm';
import  ToDoService from './services/todoService'
import {ToDo} from './types/todoInterface'
import './styles.css'
import NavBar from './components/navBar';

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
      <NavBar />
      <main className = 'container'>
        <div className='col'>
        <Switch>
                <Route
                  exact
                  path="/"
                  render={props => <Redirect {...props} to="/todos" />}
                />
                <Route exact path="/todos" render={(props) => <ToDoControl  todolist={this.state.todos} history = {props.history} />} />
                <Route path="/todos/:id" component={NewToDoForm} />
                <Route path="/newTodo" component={NewToDoForm} />
                <Route path="/not-found" component={NotFound} />
                <Route
                  path="/*"
                  render={props => <Redirect {...props} to="/not-found" />}
                />
              </Switch>
        </div>
      </main>
    </React.Fragment>
  }

}

export default App;