import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ApiService from '../services/ApiService';
import '../styles/Dashboard.css';

const EditUser = () => {
  const { id } = useParams(); // get user ID from URL
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    firstname: '',
    lastname: '',
    department: '',
    status: ''
  });

  useEffect(() => {
    // Fetch existing user data for the given id
    ApiService.getUserById(id)
      .then(res => {setFormData(res.data);
    console.log(formData)})
      .catch(err => console.error(err));
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  console.log("Sending data:", formData); // check before sending
  ApiService.updateUser(id, formData)
    .then(() => navigate('/manage-users'))
    .catch(err => console.error(err));
};

  return (
    <div className="edit-user-container">
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit}>
        <input name="username" value={formData.username} onChange={handleChange} placeholder="Username" />
        <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
        <input name="firstname" value={formData.firstName} onChange={handleChange} placeholder="First Name" />
        <input name="lastname" value={formData.lastName} onChange={handleChange} placeholder="Last Name" />
        <input name="department" value={formData.department} onChange={handleChange} placeholder="Department" />
        <input name="status" value={formData.status} onChange={handleChange} placeholder="Status" />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditUser;
