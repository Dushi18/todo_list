import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
  return (
    <div>
        <h4>{todo.title}</h4>
        <p>{todo.description}</p>
        {/* passing function inside a arrow function instead of direct calling the function because calling the function directly renders the operation while rendering. */}
        <button className='btn btn-sm btn-danger' onClick={()=>onDelete(todo)} > Delete</button>
    </div>
  )
}
//