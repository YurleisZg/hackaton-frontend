// src/components/ProtectedRoute.jsx
import React, { ComponentType } from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  element: ComponentType;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element: Component }) => {
  const token = localStorage.getItem('jwt'); // Obtener el JWT de localStorage

  if (!token) {
    // Si no hay token, redirigir al login
    return <Navigate to="/login" replace={true} />;
  }
  // Si el token existe, renderizar el componente protegido
  return <Component />;
};

export default ProtectedRoute;
