// import './App.css'
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/clients/Homepage'
import Settingpage from './pages/clients/Settingpage'
import Todopage from './pages/clients/Todopage'
import ForgotPassword from './pages/shared/ForgotPassword'
import SignIn from './pages/shared/SignIn'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/todo" element={<Todopage />} />
      <Route path="/setting" element={<Settingpage />} />


      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />


    </Routes>
  )
}

export default App
