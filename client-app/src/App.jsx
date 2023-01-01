// import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/clients/Homepage'
import Todo from './pages/clients/Todopage'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/todo" element={<Todo />} />
    </Routes>
  )
}

export default App
