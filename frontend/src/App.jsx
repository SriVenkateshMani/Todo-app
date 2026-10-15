import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo.jsx'
import { Todos } from './components/Todos.jsx'
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([])
  return (
    <div>
      <CreateTodo/>
      <Todos todos = {todos}/>
    </div>
  )   
} 

export default App; 