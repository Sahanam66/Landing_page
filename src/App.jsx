import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Profile from './components/Profile'
const App = () => {
  return (
    <div>
        <Router>
       <Nav/>
       <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/About' element={<About/>}/>
       <Route path='/Contact' element={<Contact/>}/>
       <Route path='/Profile' element={<Profile/>}/>
       </Routes>
       </Router>
    </div>
  )
}

export default App