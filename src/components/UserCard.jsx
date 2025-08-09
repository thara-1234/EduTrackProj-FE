import React from 'react';
import '../styles/CommonComponents.css';

const UserCard = ({ name, email, role }) => {
  return (
    <div className="user-card">
      <h3>{name}</h3>
    </div>
  );
};

export default UserCard;
