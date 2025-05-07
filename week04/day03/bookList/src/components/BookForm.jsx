import React, { useState } from 'react'

const BookForm = ({newBook}) => {

    const [singleBook, setSingleBook] = useState("")


    const changeHandler = e => {
        setSingleBook(e.target.value)
    }

    const submitHandler = e => {
        // to prevent the default form submission behavior (page reload)
        e.preventDefault()
        setSingleBook("")
        newBook({
            oneBook: singleBook,
            isComplete: false,
            id: Math.floor(Math.random() * 1000000).toString()
        })
    }

  return (
    <div>
        <form action="#" onSubmit={submitHandler}>
            <div>
                <label htmlFor="book" className='form-label'>Add a Book</label>
                <input type="text" onChange={changeHandler} value={singleBook} className='form-control'/>
            </div>
            <input type="submit" value="Add" className='btn btn-primary mt-3'/>
        </form>
    </div>
  )
}

export default BookForm