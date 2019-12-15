import React, {FC} from 'react';



export interface ToDo {
    id: number;
    title: string;
    completed: boolean;
}

type NewType = {
    todolist: ToDo[]
};


export class ToDoControl extends React.Component<NewType>{

    handleEdit = (todoId: number) => (e: React.MouseEvent) => {
        console.log('button clicked for '+ todoId);
    }
    render(){
    const {todolist} = this.props;
    const pending = todolist.filter((element, index, array)=> {
        return !element.completed;
    });
    const completed = todolist.filter((element, index, array)=> {
        return element.completed;
    });
    return <div>
            <div>
                <h2> Pending todos</h2>
                <ul>
                    {
                        pending.map(todo => {
                            return <li>{todo.title}</li>
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
