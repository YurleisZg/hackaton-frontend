import React, { useState } from 'react';
import ListOf from '../../components/ListOf/ListOf'; // Asegúrate de crear este componente en la misma carpeta o ajustar la ruta
import Item from '../../components/Item/Item'; // Asegúrate de que la ruta sea correcta
import avatar from '../../assets/filip.svg'; // Cambia la ruta según la ubicación de tu imagen

const ExamplePage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleList = () => setIsOpen((prev) => !prev);

  const items = [
    {
      name: "Item 1",
      label: "Etiqueta 1",
      description: "Descripción del ítem 1.",
      users: [
        { id: 1, name: 'User 1', avatar: avatar },
        { id: 2, name: 'User 2', avatar: avatar },
        { id: 3, name: 'User 3', avatar: avatar },
        { id: 4, name: 'User 4', avatar: avatar },
        { id: 5, name: 'User 5', avatar: avatar },
        { id: 6, name: 'User 6', avatar: avatar },
      ],
    },
    {
      name: "Item 2",
      label: "",
      description: "Descripción del ítem 2.",
      users: [
        { id: 7, name: 'User 7', avatar: avatar }
      ],
    },
    // Agrega más ítems según sea necesario
  ];

  const handleItemClick = (itemName: string) => {
    console.log(`${itemName} clicked`);
  };

  return (
    <div>
      <ListOf title="List 1" itemCount={items.length} isOpen={isOpen} toggleList={toggleList}>
        {isOpen && items.map((item, index) => (
          <Item
            key={index}
            name={item.name}
            label={item.label}
            description={item.description}
            users={item.users}
            onClick={() => handleItemClick(item.name)}
          >
            {/* Aquí se pueden agregar botones u otros componentes en el lado derecho */}
            <button onClick={() => console.log(`Action 1 for ${item.name}`)}>Acción 1</button>
            <button onClick={() => console.log(`Action 2 for ${item.name}`)}>Acción 2</button>
          </Item>
        ))}
      </ListOf>
    </div>
  );
};

export default ExamplePage;
