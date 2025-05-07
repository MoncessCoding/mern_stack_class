import { useState } from 'react'
import './App.css'
import BookForm from './components/BookForm'
import DisplayAllBooks from './components/DisplayAllBooks'

function App() {

  const [bookList, setBookList] = useState([])

  const newBook = newBook => {
    setBookList((previousBook) => (
      [...previousBook, newBook]

//   [book1, book2, book3]
//   [book1, book2, book3, book4]
//   [book1, book2, book4]
//   [book1, book2, book4---]

    ))
  }

// completeBook function is defined to mark a book item as complete or incomplete
  const completeBook = submittedBook => {
    
    let updatedBook = bookList.map((book, idx) => {

      if(book === submittedBook){
    //Created a new object to hold the updated values instead of modifying the existing object
        let newBook = {...book}
        newBook.isComplete = !newBook.isComplete
        return newBook
      } else {
        return book
      }
    })
    setBookList(updatedBook)
  }

  const deleteBook = (book_id) => {

    const filteredBook = bookList.filter((book) => {
      return book.id !== book_id
    })
    setBookList(filteredBook)
  }



  return (
    <>
      <BookForm newBook = {newBook}/>
      <DisplayAllBooks bookList = {bookList} completeBook = {completeBook} deleteBook = {deleteBook}/>
    </>
  )
}

export default App
