/* eslint-disable @typescript-eslint/no-unused-vars */
import React,{useState} from 'react';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import { TodoType } from './types';
import { Console } from 'console';

const todosData = [
  {
    id:"1",
    title: "todo title 1"
  },
  {
    id:"2",
    title: "todo title 2"
  },
  {
    id:"3",
    title: "todo title 3"
  },
  {
    id:"4",
    title: "todo title 4"
  },
  {
    id:"5",
    title: "todo title 5"
  },
  {
    id:"6",
    title: "todo title 6"
  },
]

function App() {
  const [todos, setTodos] = useState(todosData)
  const handleDeleteTodo=(id:string)=>{
    const filterData = todos.filter(todo=>todo.id !== id)
    setTodos(filterData)
  }
  const handleAddNewTodo = (newTodo:TodoType) =>{
      setTodos(prevState =>[...prevState,newTodo])
  }
  return (
    <>
        <AddTodo handleAddNewTodo={handleAddNewTodo}/>
        <Todos todos = {todos} handleDeleteTodo={handleDeleteTodo}/>
    </>
  );
}

export default App;
