import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    
    <ul className="main-nav">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/About">About</Link></li>
      <li><Link to="/Teachers">Teachers</Link></li>
      <li><Link to="/Courses">Courses</Link></li>
      <li><Link to="/Invite">Invite</Link></li>
    </ul>    
  </header>
);

export default Header;