import {useState, useRef, useEffect} from 'react';
import TodoList from './TodoList';
import {v4 as uuidv4} from 'uuid';

const Local_Storage_Key = 'todoApp.todos'

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(Local_Storage_Key))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(Local_Storage_Key, JSON.stringify(todos))
  }, [todos])

  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    if (name === '') return;
    setTodos(prevTodos => {
      return [...prevTodos, {id: uuidv4(), name: name, completed: false}]
    })
    todoNameRef.current.value = null;
  }

  function handleClearTodos(){
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos)
  }

  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.completed = !todo.completed
    setTodos(newTodos)
  }

  return (
    <>
     <TodoList todos = {todos} toggleTodo = {toggleTodo}/>
     <input ref = {todoNameRef} type = "text" />
     <button onClick = {handleAddTodo}>Add todo</button>
     <button onClick = {handleClearTodos}>clear completed</button>
     <div>{todos.filter(todo => !todo.completed).length} tasks left</div>
    </>
  );
}

export default App;