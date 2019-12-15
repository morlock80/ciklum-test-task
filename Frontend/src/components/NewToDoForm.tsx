import React, { RefObject } from 'react';
import {History} from 'history';
import {ToDo} from'./../types/todoInterface';

type ToDoTask = {
    todotask: ToDo,
    history : History
};

export class NewToDoForm extends React.Component<ToDoTask> {

    todoTitle:RefObject<HTMLTextAreaElement> = React.createRef();

    handleCancel = (e: React.MouseEvent) => {
        this.props.history.push('/');
    }
    handleSubmit =  (e: React.FormEvent<HTMLFormElement>) => {
        const title = this.todoTitle.current!.value;
        
    }

    render(){
        return  <form onSubmit={this.handleSubmit}>
        <div className="form-group">
        <label htmlFor='texttodotitle' >What to do</label>
        <textarea ref = {this.todoTitle} className="form-control" id="texttodotitle" rows={3}></textarea>
        <button className = 'btn btn-primary' >Submit</button>
        <button className = 'btn' onClick = {this.handleCancel}>Cancel</button>
      </div>
      </form>
    }
}