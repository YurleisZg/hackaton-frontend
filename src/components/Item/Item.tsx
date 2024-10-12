
import React, { useState } from 'react';
import './Item.css'; // Asegúrate de crear este archivo CSS

interface User {
  id: number;
  name: string;
  avatar: string; // URL del avatar del usuario
}

interface ItemProps {
  name: string;
  label?: string; // Cambia a opcional
  description?: string; // Propiedad opcional
  users: User[];
  onClick: () => void; // Evento al hacer clic
  children?: React.ReactNode; // Propiedad para componentes hijos
}

const Item: React.FC<ItemProps> = ({ name, label, description, users, onClick, children }) => {
  // Estado para controlar la visibilidad del tooltip
  const [showTooltip, setShowTooltip] = useState(false);

  // Obtener los usuarios adicionales
  const additionalUsers = users.slice(4); // Obtener usuarios que no se están mostrando

  return (
    <div className="item-container" onClick={onClick}>
      <div className="left-side">
        <div className="item-header">
          <h4 className="item-name">{name}</h4>

          {/* Renderizar solo si hay usuarios */}
          {users.length > 0 && (
            <div className="item-users">
              {users.slice(0, 4).map((user) => (
                <div key={user.id} className="user-container">
                  <img src={user.avatar} alt={user.name} className="user-avatar" />
                  {users.length === 1 && <span className="user-name">{user.name}</span>} {/* Mostrar nombre si hay un único usuario */}
                </div>
              ))}
              
              {additionalUsers.length > 0 && (
                <div 
                  className="user-preview" 
                  onMouseEnter={() => setShowTooltip(true)} 
                  onMouseLeave={() => setShowTooltip(false)}
                >
                  +{additionalUsers.length} {/* Muestra el número de usuarios adicionales */}
                  {showTooltip && (
                    <div className="tooltip">
                      {additionalUsers.map((user) => (
                        <div key={user.id} className="tooltip-item">
                          <img src={user.avatar} alt={user.name} className="tooltip-avatar" />
                          <span>{user.name}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="mid-side">
        {description && <p className="item-description">{description}</p>}
      </div>

      <div className="right-side">
        {label && <span className="item-label">{label}</span>} {/* Solo muestra la etiqueta si existe */}
        {children} {/* Renderiza los componentes hijos aquí */}
      </div>
    </div>
  );
};

export default Item;
