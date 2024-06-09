import React from 'react'
import './style/App.css'
import Header from './components/Header'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from './components/Home'
import Skill from './components/Skill'
import About from './components/About'

const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/skill' element={<Skill/>}/>
        <Route path='*' element={<h1>Page not found ----- 4O4 -----</h1>}/>
      </Routes>
    </Router>
  )
}

export default App