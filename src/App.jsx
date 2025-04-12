import React, { useState } from 'react'
import Navbar from './components/navbar'
import Movies from './components/movies'

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  return (
    <div className="w-full">
      <Navbar  setCategory={setSelectedCategory} /> 
      <Movies selectedCategory={selectedCategory} />
    </div>
  )
}

export default App