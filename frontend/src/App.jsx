import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo.jsx'
import { Todos } from './components/Todos.jsx'
import axios

function App() {
  const [count, setCount] = useState([])

  

  return (
    <div>
      <CreateTodo/>
      <Todos todos = {[
        {
          title: "Code react",
          description: "Complete components, state, todoApp",
          completed: false
        },
        {
          title: "Code FastAPI",
          description: "Complete Langgraph, state, RAG",
          completed: true
        }
      ]}/>
    </div>
  )   
} 

export default App; 