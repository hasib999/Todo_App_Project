import React, { ChangeEvent, FormEvent, useState } from 'react'

type Props = {
    handleAddNewTodo:Function;
}

const AddTodo = (props: Props) => {
    const [title, setTitle] = useState("")
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }
    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const newTodo = {id:new Date().getTime().toString(),title}
        props.handleAddNewTodo(newTodo)
        setTitle("")
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className='form-input'>
                <label htmlFor="title">Todo Title:</label>
                <input type="text" name='title' value={title} onChange={handleChange} required autoFocus />
            </div>
            <button type='submit'>Add Todo</button>
        </form>
    )
}

export default AddTodo