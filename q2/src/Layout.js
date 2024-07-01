import React from 'react';
import { Link } from 'react-router-dom';

function Layout({ children }) {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Blogs">Blogs</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
          <li><Link to="/NoPage">NoPage</Link></li>
        </ul>
      </nav>
      {children}
    </div>
  );
}

export default Layout;