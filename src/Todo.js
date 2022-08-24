import React from 'react'

export default function Todo ({todo, toogleTodo}) {

  function handletodoclick(){
    toogleTodo(todo.id);
  }
  return (
    <div>
        <label>
            <input type="checkbox" checked={todo.complete} onChange={handletodoclick}/>
    {todo.name}
    </label>
    </div>
  )
}
