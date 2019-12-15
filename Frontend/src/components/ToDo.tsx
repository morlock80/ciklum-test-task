import React from 'react';
import { History } from 'history';
import _ from 'lodash';
import {ToDo} from'./../types/todoInterface';


type ToDoList = {
    todolist: ToDo[],
    history : History
};


export class ToDoControl extends React.Component<ToDoList>{

    handleEdit = (todoId: number) => (e: React.MouseEvent) => {
        this.props.history.push(`/todos/${todoId}`);
    }
    render(){
    const pending = this.props.todolist.filter((element, index, array)=> {
        return !element.completed;
    });
    const completed = this.props.todolist.filter((element, index, array)=> {
        return element.completed;
    });
    return <div>
            <div>
                <h2> Pending todos</h2>
                <ul>
                    {
                        pending.map(todo => {
                            return <li>
                                <div className ='row'>
                                 <div className = 'col-sm'>{todo.title}</div>
                                 <div className = 'col-sm'><button className ='button' onClick ={this.handleEdit(todo.id)}>Edit</button></div>
                                </div></li>
                        })
                    }
                </ul>
            </div>
            <div>
                <h2> Completed todos</h2>
                <ul>
                    {
                        completed.map(todo => {
                            return <li>{todo.title}</li>
                        })
                    }
                </ul>
            </div>
            </div>
    }
}
