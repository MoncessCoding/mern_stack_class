import React from 'react'

const Display = ({toDoList, setToDoList}) => {

// Function to handle checkbox toggle
const handleCheckBox = todo_id => {
    console.log(todo_id)
    // make copy of toDoList
    let copyToDoList = [...toDoList]

    const updatedCopyToDoList = copyToDoList.map((oneToDo, idx) => idx == todo_id ? {
        complete: !oneToDo.complete,
        todo: oneToDo.todo
    } : oneToDo)

    // if (idx == todo_id){
    //     {oneToDo.complete : true}
    // } else {
    //     oneToDo
    // }

    setToDoList(updatedCopyToDoList)
}

const deleteToDo = idx => {
    //Filter out todo item to be deleted
    let updatedToDoList = toDoList.filter((toDo, toDoIndex) => idx != toDoIndex)
    setToDoList(updatedToDoList)
}

  return (
    <div>

        {
            toDoList.map((oneToDo, idx) => (
                <div key={idx}>
                    <input type="checkbox" onChange={() => handleCheckBox(idx)}/>
                    <h2 style={{textDecoration: oneToDo.complete ? "line-through": ""}} >{oneToDo.todo}</h2>
                    <input type="submit" value="Delete" onClick={() => deleteToDo(idx)} hidden={!oneToDo.complete}/>
                </div>
            ))
        }

    </div>
  )
}

export default Display