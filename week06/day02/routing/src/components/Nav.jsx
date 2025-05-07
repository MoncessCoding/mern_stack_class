import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
        <h2>Navigation</h2>
        <Link to={'/'}>Go to Landing Page</Link>
        <Link to={'/home'}>Go to Home Page</Link>
        <Link to={'/form'}>Go to Form Page</Link>
    </div>
  )
}

export default Nav