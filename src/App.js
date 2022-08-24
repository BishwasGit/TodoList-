import React,{useState,useRef,useEffect}from 'react';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const [todos , setTodos] = useState([]);
  const todoNameRef  = useRef();

  //load saved todolist
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) {setTodos(storedTodos)}
    },[])

  //save todolist 
  useEffect(()=>{localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(todos))},[todos])

    function toogleTodo(id){
      const newTodos = [...todos];
      const todo = newTodos.find(todo => todo.id === id);
      todo.complete = !todo.complete;
      setTodos(newTodos);
    }

    function handlecleartodo(){
      const newTodos = todos.filter(todo => !todo.complete);
      setTodos(newTodos); 
    }


  function Handleaddtodo(e){
    const name  = todoNameRef.current.value; 
    if(name === '') {return} 
   setTodos(prevTodo =>{
    return [...prevTodo, { id: uuidv4(), name: name, complete:false}]
   });
    todoNameRef.current.value = null;
  }
  return (
    <>
    <TodoList todos = {todos} toogleTodo = {toogleTodo}/>
      <input type = "text" ref={todoNameRef}/><br></br>
      <button onClick={Handleaddtodo}> Add todo list</button><br></br>
      <button onClick={handlecleartodo}> Clear completed task</button>
      <div>{todos.filter(todos => !todos.complete).length} task left</div>
    </>
  );  
}

export default App;
