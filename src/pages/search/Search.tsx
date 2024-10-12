import React, { useState } from 'react';
import ListOf from '../../components/ListOf/ListOf'; // Ajusta la ruta según tu estructura
import Item from '../../components/Item/Item'; // Ajusta la ruta según tu estructura
import avatar from '../../assets/filip.svg'; // Ajusta la ruta según tu estructura
import CourseCard from '../../components/CourseCard/CourseCard'; // Asegúrate de que la ruta sea correcta
import './Search.css'
import BarSearch from '../../components/BarSearch/BarSearch';

const ExamplePage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<null | { name: string; teacherName: string; price: number; university: string; rating: string; date: string; startTime: string; endTime: string }>(null);

  const toggleList = () => setIsOpen((prev) => !prev);

  const items = [
    {
      name: "Item 3",
      label: "Etiqueta 3",
      description: "Descripción del ítem 3.",
      users: [
        { id: 4, name: 'User 4', avatar: avatar },
        { id: 5, name: 'User 5', avatar: avatar },
      ],
      courseDetails: {
        courseName: "Curso 3",
        teacherName: "Profesor 3",
        price: 200,
        university: "Universidad C",
        rating: "4.7",
        date: "2024-10-14",
        startTime: "13:00",
        endTime: "15:00",
      },
    },
    {
      name: "Item 4",
      label: "Etiqueta 4",
      description: "Descripción del ítem 4.",
      users: [
        { id: 6, name: 'User 6', avatar: avatar },
        { id: 7, name: 'User 7', avatar: avatar },
        { id: 8, name: 'User 8', avatar: avatar },
      ],
      courseDetails: {
        courseName: "Curso 4",
        teacherName: "Profesor 4",
        price: 250,
        university: "Universidad D",
        rating: "4.6",
        date: "2024-10-15",
        startTime: "14:00",
        endTime: "16:00",
      },
    },
    {
      name: "Item 5",
      label: "",
      description: "Descripción del ítem 5.",
      users: [{ id: 9, name: 'User 9', avatar: avatar }],
      courseDetails: {
        courseName: "Curso 5",
        teacherName: "Profesor 5",
        price: 300,
        university: "Universidad E",
        rating: "4.9",
        date: "2024-10-16",
        startTime: "09:00",
        endTime: "11:00",
      },
    },
    {
      name: "Item 6",
      label: "Etiqueta 6",
      description: "Descripción del ítem 6.",
      users: [
        { id: 10, name: 'User 10', avatar: avatar },
        { id: 11, name: 'User 11', avatar: avatar },
      ],
      courseDetails: {
        courseName: "Curso 6",
        teacherName: "Profesor 6",
        price: 180,
        university: "Universidad F",
        rating: "4.4",
        date: "2024-10-17",
        startTime: "10:30",
        endTime: "12:30",
      },
    },
    {
      name: "Item 7",
      label: "Etiqueta 7",
      description: "Descripción del ítem 7.",
      users: [
        { id: 12, name: 'User 12', avatar: avatar },
        { id: 13, name: 'User 13', avatar: avatar },
        { id: 14, name: 'User 14', avatar: avatar },
      ],
      courseDetails: {
        courseName: "Curso 7",
        teacherName: "Profesor 7",
        price: 220,
        university: "Universidad G",
        rating: "4.2",
        date: "2024-10-18",
        startTime: "15:00",
        endTime: "17:00",
      },
    },
  ];
  

  const handleItemClick = (itemName: string, courseDetails: any) => {
    console.log(`${itemName} clicked`);
    setSelectedCourse(courseDetails);
  };

  const closeCard = () => {
    setSelectedCourse(null);
  };

  return (
    <div className='search-page'>
      <BarSearch></BarSearch>
      {/* Aquí mostramos la CourseCard si hay un curso seleccionado */}
      {selectedCourse && (
        <div className="modal-content">
          <CourseCard teacherAvatar={avatar} courseName={''} {...selectedCourse} />
          <button onClick={closeCard}>Cerrar</button>
        </div>
      )}
      <ListOf title="List 1" itemCount={items.length} isOpen={isOpen} toggleList={toggleList}>
        {isOpen && items.map((item, index) => (
          <Item
            key={index}
            name={item.name}
            label={item.label}
            description={item.description}
            users={item.users}
            onClick={() => handleItemClick(item.name, item.courseDetails)}
          >
            <button onClick={() => console.log(`Action 1 for ${item.name}`)}>Acción 1</button>
            <button onClick={() => console.log(`Action 2 for ${item.name}`)}>Acción 2</button>
          </Item>
        ))}
      </ListOf>
    </div>
  );
};

export default ExamplePage;
