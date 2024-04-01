import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/Styles.css';
import ColorChanger from './assets/ColorChanger';
import TaskList from './assets/TaskList';


const tasks = [
  {
    "id": 1,
    "text": "Primera tarea",
    "completed": true
  },
  {
    "id": 2,
    "text": "Segunda tarea",
    "completed": false
  },
  {
    "id": 3,
    "text": "Tercera tarea",
    "completed": true
  },
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ColorChanger color="green"></ColorChanger>
    <TaskList tasks={tasks}/>
  </React.StrictMode>,
)
