import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import '../styles/CommonComponents.css';

const Sidebar = () => {
  const { userRole } = useUser();
  console.log('Current user role:', userRole);

  const renderLinks = () => {
    switch (userRole?.toUpperCase()) {
      case 'ADMIN':
        return (
          <>
            <li><Link className="sidebar-link" to="/adminDashboard">Dashboard</Link></li>
            <li><Link className="sidebar-link" to="/manage-users">Manage Users</Link></li>
            <li><Link className="sidebar-link" to="/assign-roles">Assign Roles</Link></li>
            <li><Link className="sidebar-link" to="/upload-guidelines">Upload Guidelines</Link></li>
          </>
        );
      case 'STUDENT':
        return (
          <>
            <li><Link className="sidebar-link" to="/studentDashboard">Dashboard</Link></li>
            <li><Link className="sidebar-link" to="/submit-project">Submit Project</Link></li>
            <li><Link className="sidebar-link" to="/view-guidelines">View Guidelines</Link></li>
          </>
        );
      case 'HOD':
        return (
          <>
            <li><Link className="sidebar-link" to="/hodDashboard">Dashboard</Link></li>
            <li><Link className="sidebar-link" to="/approve-projects">Approve Projects</Link></li>
          </>
        );
      default:
        return <li className="no-role">No role assigned</li>;
    }
  };

  return (
    <div className="sidebar">
      <h2 className="sidebar-title">EduTrack</h2>
      <ul className="sidebar-list">
        {renderLinks()}
        <li><Link className="sidebar-link" to="/logout">Logout</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
