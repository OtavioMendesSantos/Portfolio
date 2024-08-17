import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/')
  }

  return (
    <div>
      <h1>NotFound</h1>
      <button onClick={handleClick}>Navegar Para Home</button>
    </div>
  )
}

export default NotFound
