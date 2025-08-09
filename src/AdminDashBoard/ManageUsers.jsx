import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import './Dashboard.css';
import './CommonComponents.css';

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    firstname: '',
    lastname: '',
    phoneNumber: '',
    department: '',
    status: '',
    profilePictureUrl: ''
  });

  const [editId, setEditId] = useState(null);

  // Fetch users
  const fetchUsers = async () => {
    const res = await fetch('http://localhost:8080/api/users');
    const data = await res.json();
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Handle form input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Add or update user
  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = editId ? 'PUT' : 'POST';
    const url = editId 
      ? `http://localhost:8080/api/users/${editId}` 
      : `http://localhost:8080/api/users`;

    await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    setFormData({
      username: '',
      email: '',
      firstname: '',
      lastname: '',
      phoneNumber: '',
      department: '',
      status: '',
      profilePictureUrl: ''
    });
    setEditId(null);
    fetchUsers();
  };

  // Edit user
  const handleEdit = (user) => {
    setEditId(user.id);
    setFormData(user);
  };

  // Delete user
  const handleDelete = async (id) => {
    await fetch(`http://localhost:8080/api/users/${id}`, { method: 'DELETE' });
    fetchUsers();
  };

  return (
    <div className="admin-dashboard">
      <Sidebar />
      <div className="admin-dashboard-content">
        <Header title="Manage Users" />
        <div className="dashboard-body">
          <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
            <input name="username" value={formData.username} onChange={handleChange} placeholder="Username" required />
            <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
            <input name="firstname" value={formData.firstname} onChange={handleChange} placeholder="First Name" required />
            <input name="lastname" value={formData.lastname} onChange={handleChange} placeholder="Last Name" required />
            <input name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Phone Number" required />
            <input name="department" value={formData.department} onChange={handleChange} placeholder="Department" required />
            <input name="status" value={formData.status} onChange={handleChange} placeholder="Status" required />
            <input name="profilePictureUrl" value={formData.profilePictureUrl} onChange={handleChange} placeholder="Profile Picture URL" required />
            <button type="submit">{editId ? 'Update' : 'Add'} User</button>
          </form>

          <table border="1" cellPadding="10">
            <thead>
              <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Email</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Department</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u.id}>
                  <td>{u.id}</td>
                  <td>{u.username}</td>
                  <td>{u.email}</td>
                  <td>{u.firstname} {u.lastname}</td>
                  <td>{u.phoneNumber}</td>
                  <td>{u.department}</td>
                  <td>{u.status}</td>
                  <td>
                    <button onClick={() => handleEdit(u)}>Edit</button>
                    <button onClick={() => handleDelete(u.id)}>Delete</button>
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
