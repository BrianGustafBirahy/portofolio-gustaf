import { useState } from 'react'
import './assets/css/meyawo.css'
import HomePages from './pages/homepages'

function App() {
  const [count, setCount] = useState(0)

  return (
    <HomePages/>
  )
}

export default App
