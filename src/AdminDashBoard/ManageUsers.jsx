import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import ApiService from '../services/ApiService';
import '../styles/Dashboard.css';
import { useNavigate } from 'react-router-dom';

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const res = await ApiService.getAllUsers();
      setUsers(res.data);
    } catch (err) {
      console.error('Error fetching users:', err);
    }
  };

  const deleteUser = async (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      await ApiService.deleteUser(id);
      loadUsers();
    }
  };

  return (
    <div className="admin-dashboard">
      <Sidebar />
      <div className="admin-dashboard-content">
        <Header title="Manage Users" />
        <div className="dashboard-body">
          <table className="users-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Email</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Department</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.firstname}</td>
                  <td>{user.lastname}</td>
                  <td>{user.department}</td>
                  <td>{user.status}</td>
                  <td>
                    <button
  className="edit-btn"
  onClick={() => navigate(`/edit-user/${user.id}`)}
>
  Edit
</button>
                    <button className="delete-btn" onClick={() => deleteUser(user.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
