// import './App.css'
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/clients/Homepage'
import Todopage from './pages/clients/Todopage'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/todo" element={<Todopage />} />
    </Routes>
  )
}

export default App
