import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Form = () => {
    
    const [word, setWord] = useState("")
    const [color, setColor] = useState("")

    const navigate = useNavigate()

    // const wordHandler = e => {
    //     setWord(e.target.value)
    // }

    const handleSubmit = e => {
        e.preventDefault()

        navigate(`/${word}/${color}`)
    }

  return (
    <div>
        <h1>Form</h1>
        <form action="#" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="word">Word</label>
                <input type="text" onChange={e => setWord(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="color">Color</label>
                <input type="text" onChange={e => setColor(e.target.value)}/>
            </div>

            <input type="submit" value="Submit"/>
        </form>
    </div>
  )
}

export default Form