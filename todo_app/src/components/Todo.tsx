import React from 'react'
import { TodoType } from '../types';

type TodoPropsType = {
    todo: TodoType;
    handleDeleteTodo:Function;
}

const Todo = (props:TodoPropsType) => {
    const {id,title} = props.todo
    const deleteTodo= (id:string)=>{
        props.handleDeleteTodo(id)
    }
  return (
    <article className='todo'>
        <h3>{id}</h3>
        <h3>{title}</h3>
        <button onClick={()=>{deleteTodo(id)}}>Delete Todo</button>
    </article>
  )
}

export default Todo