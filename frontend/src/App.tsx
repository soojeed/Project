import React from 'react'
import Home from './pages/home/home'
import Blog from './pages/Blog/blog'

const App = () => {
  return (
    <div>
      {Home()}
      {Blog()}
    </div>
  )
}

export default App