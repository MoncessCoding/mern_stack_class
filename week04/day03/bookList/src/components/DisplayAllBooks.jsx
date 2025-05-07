import React from 'react'

const DisplayAllBooks = (props) => {

    const {bookList, completeBook, deleteBook} = props

  return (
    <div>
        <h1>This Display Component</h1>
        {
            bookList.map((book, idx)=>{
                return (
                    <div key={book.id}>
                        <h2 className={book.isComplete ? "completed": null}>{book.oneBook}</h2>
                        <input type="checkbox" onChange={()=> completeBook(book)}/>

                        <input type="submit" value="Delete" onClick={() => deleteBook(book.id)} className='btn btn-danger ms-2'/>
                    </div>
                )
            }) 
        }
    </div>
  )
}

export default DisplayAllBooks