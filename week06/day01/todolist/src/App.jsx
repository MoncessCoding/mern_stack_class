import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import Display from './components/Display'

function App() {

  //Initialize state for toDoList
  const [toDoList, setToDoList] = useState([])

  return (
    <>
      <Form toDoList ={toDoList} setToDoList={setToDoList}/>
      <Display toDoList ={toDoList} setToDoList={setToDoList}/>
    </>
  )
}

export default App
