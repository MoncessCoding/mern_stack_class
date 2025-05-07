import {useState} from 'react'

const Form = ({toDoList, setToDoList}) => {

    const [newToDo, setNewToDo] = useState({
        todo: "",
        complete: false
    })

    //Function to update the todo text as user types
    const createTodo = e =>{
        setNewToDo({
            todo: e.target.value,
            complete: false
        })
    }

    // Function to handle form submission
    const handleSubmit = e => {
        e.preventDefault()

// Reset the input field
        setNewToDo({
            todo: "",
            complete: false
        })

//Add new todo to the todo list
        setToDoList([...toDoList, newToDo])

    }

    



  return (
    <div>
        <form action="#" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="todo">Add Todo</label>
                <input type="text" onChange={createTodo} value={newToDo.todo}/>
            </div>
            <input type="submit" value="Add"/>
        </form>
    </div>
  )
}

export default Form