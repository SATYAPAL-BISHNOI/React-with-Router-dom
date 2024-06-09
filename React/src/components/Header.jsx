import React from 'react'
import '../style/Header.css'
import { Link } from 'react-router-dom'
const Header = () => {
    // const page = "Header"
  return (
    <>
    {/* <h1>{page}</h1> */}
        <nav>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/skill'}>Skill's</Link>
        </nav>
    </>
  )
}

export default Header