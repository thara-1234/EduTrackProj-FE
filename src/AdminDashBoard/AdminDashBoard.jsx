import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import UserCard from '../components/UserCard';
import '../styles/Dashboard.css';


const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <Sidebar />
      <div className="admin-dashboard-content">
        <Header title="Admin Dashboard" />
        <div className="dashboard-body">
          <h2 className="dashboard-title">Welcome, Admin..</h2>
          <UserCard />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
