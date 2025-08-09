import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Login from './pages/Login';
import Register from './pages/Register';
import ProfileComplete from './pages/ProfileComplete';
import AdminDashboard from './AdminDashBoard/AdminDashBoard';
import { UserProvider } from './contexts/UserContext';
import ManageUsers from './AdminDashBoard/ManageUsers';
import EditUser from './AdminDashBoard/EditUser';
function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/completeProfile" element={<ProfileComplete />} />
          <Route path="/adminDashboard" element={<AdminDashboard />} />
          <Route path="/manage-users" element={<ManageUsers />} />
          <Route path="/edit-user/:id" element={<EditUser />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
