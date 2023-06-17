import React from 'react'
import Todo from './Todo';
import { TodoType } from '../types';

type TodosPropsType = {
    todos: TodoType[];
    handleDeleteTodo: Function;
}


const Todos = (props:TodosPropsType) => {
  return (
    <section className='todos'>
        {props.todos.map(todo=><Todo key={todo.id} todo={todo} handleDeleteTodo={props.handleDeleteTodo}/>)}
    </section>
  )
}

export default Todos