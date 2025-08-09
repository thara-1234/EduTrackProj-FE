import React from 'react';
import '../styles/CommonComponents.css';

const Header = ({ title }) => {
  return (
    <div className="header">
      <h1 className="header-title">{title}</h1>
    </div>
  );
};

export default Header;
