import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css'; // Importamos el archivo CSS

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar-container">
      <h2 className="sidebar-title">Menu</h2>
      <nav className="sidebar-nav">
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `sidebar-link ${isActive ? 'sidebar-link-active' : ''}`
          }
        >
          Profile
        </NavLink>
        <NavLink
          to="/search"
          className={({ isActive }) =>
            `sidebar-link ${isActive ? 'sidebar-link-active' : ''}`
          }
        >
          Cursos
        </NavLink>
        <NavLink
          to="/contract"
          className={({ isActive }) =>
            `sidebar-link ${isActive ? 'sidebar-link-active' : ''}`
          }
        >
          Contratos
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
