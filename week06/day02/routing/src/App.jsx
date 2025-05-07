import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Form from './components/Form'
import LandingPage from './components/LandingPage'
import Nav from './components/Nav'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Word from './components/Word'

function App() {

  return (
    <>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path='/'  element={<LandingPage/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/form' element={<Form/>}/>
          <Route path='/:unicorn/:color'  element={<Word/>}/>
        </Routes>
      </BrowserRouter>

      {/* <Home/>
      <Form/>
      <LandingPage/> */}
    </>
  )
}

export default App
