import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
      <div className='logo'>
        <Link className='links' to='/'>
          picklyze.
        </Link>
      </div>

      <nav className='navbar'>
        <ul>
          <Link className='links' target="_blank" to={{pathname: "https://docs.google.com/forms/d/e/1FAIpQLSdoh_pbdV9Qbz8axv5RwGA6296HOQupZtHW8ZfZPvG_VLqyBw/viewform?usp=sf_link" }}>
            Become a Coach
          </Link>
          <Link className='links' to='/contact'>
            Blog
          </Link>
          <Link className='links' to='/contact'>
            Sign In
          </Link>
          <Link className='links' to='/faq'>
            Sign Up 
          </Link>
        </ul>
      </nav>
    </header>
  )
}

export default Header
