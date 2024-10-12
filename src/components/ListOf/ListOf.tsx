import React from 'react';
import arrow from '../../assets/bxs_down-arrow.svg'; // Asegúrate de que la ruta sea correcta
import './ListOf.css'; // Asegúrate de crear este archivo CSS

interface ListOfProps {
  title: string;
  itemCount: number; // Agrega la propiedad para contar ítems
  isOpen: boolean;
  toggleList: () => void;
  children: React.ReactNode;
}

const ListOf: React.FC<ListOfProps> = ({ title, itemCount, isOpen, toggleList, children }) => {
  return (
    <div className="list-of-container">
      <div className="list-of-header" onClick={toggleList}>
        <img src={arrow} alt="Toggle Arrow" className={`arrow ${isOpen ? 'open' : ''}`} />
        <h3>{title}</h3><p>({itemCount})</p> {/* Muestra el título con la cantidad de ítems */}
      </div>
      <div className={`list-of-content ${isOpen ? 'open' : ''}`}>
        {children}
      </div>
    </div>
  );
};

export default ListOf;
