import { useState } from 'react'
import Youtube from './Youtube'

function App() {

  const username = "Ankur"

  return (
    <>
      <h1>Vite + React</h1>
      <p>{2+2} {username}</p>
      <Youtube/>
    </>
  )
}

export default App
