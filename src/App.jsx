import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import ProfileComplete from './pages/ProfileComplete';

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/completeProfile" element={<ProfileComplete />} />
      
      </Routes>
    </Router>
  )
}

export default App 