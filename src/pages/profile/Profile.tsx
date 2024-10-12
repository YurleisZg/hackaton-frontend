import React, { useState } from 'react';
import ListOf from '../../components/ListOf/ListOf'; // Ajusta la ruta según tu estructura
import Item from '../../components/Item/Item'; // Ajusta la ruta según tu estructura
import avatar from '../../assets/mark-zuckerberg.jpeg'; // Ajusta la ruta según tu estructura
import './Profile.css';

const Profile: React.FC = () => {
  
  const [certificationsOpen, setCertificationsOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [groupsOpen, setGroupsOpen] = useState(false);
  const [professorsOpen, setProfessorsOpen] = useState(false);
  const [logsOpen, setLogsOpen] = useState(false);

  const toggleGroups = () => setGroupsOpen((prev) => !prev);
  const toggleProfessors = () => setProfessorsOpen((prev) => !prev);
  const toggleLogs = () => setLogsOpen((prev) => !prev);
  const toggleCertifications = () => setCertificationsOpen((prev) => !prev);
  const toggleCourses = () => setCoursesOpen((prev) => !prev);

  // Datos de ejemplo
  const certifications = [
    { id: 1, name: "Certificación 1", users: [{ id: 1, name: 'User 1', avatar }] },
    { id: 2, name: "Certificación 2", users: [{ id: 2, name: 'User 2', avatar }] },
  ];

  const courses = [
    { id: 1, name: "Curso 1", users: [{ id: 3, name: 'User 3', avatar }] },
    { id: 2, name: "Curso 2", users: [{ id: 4, name: 'User 4', avatar }] },
  ];

  const groups = [
    { id: 1, name: "Grupo de Estudio 1", users: [{ id: 1, name: 'User 1', avatar }] },
    { id: 2, name: "Grupo de Estudio 2", users: [{ id: 2, name: 'User 2', avatar }] },
    { id: 3, name: "Grupo de Estudio 3", users: [{ id: 3, name: 'User 3', avatar }] },
  ];

  const currentProfessors = [
    { id: 1, name: "Profesor A", subject: "Matemáticas", users: [{ id: 1, name: 'User 1', avatar }] },
    { id: 2, name: "Profesor B", subject: "Historia", users: [{ id: 2, name: 'User 2', avatar }] },
    { id: 3, name: "Profesor C", subject: "Ciencias", users: [{ id: 3, name: 'User 3', avatar }] },
  ];

  const logs = [
    { id: 1, action: "Inscripción en Curso 1", date: "2024-10-01" },
    { id: 2, action: "Asistencia a Clase de Matemáticas", date: "2024-10-02" },
    { id: 3, action: "Entrega de Tarea 1", date: "2024-10-05" },
    { id: 4, action: "Inscripción en Curso 2", date: "2024-10-08" },
  ];

  return (
    <div className="container">
      <div className="column column-left">
        <img className="circular-image" src={avatar} alt="Avatar" style={{ width: '215px', height: '215px' }} />
        <h2>{/* Cambia esto según la variable que desees */}Nombre del Usuario</h2>
        <p>Tipo de usuario: Profesor</p>
        {/* Si es profesor, añadir el precio */}
        <p>Precio por hora: $20/hrs</p>
        
        <button onClick={() => console.log('Agregar Certificado')}>Agregar Certificado</button>
        <ListOf title="Certificaciones" itemCount={certifications.length} isOpen={certificationsOpen} toggleList={toggleCertifications}>
          {certificationsOpen && certifications.map(cert => (
            <Item
              key={cert.id}
              name={cert.name}
              users={cert.users}
              onClick={() => console.log(`${cert.name} clicked`)}
            />
          ))}
        </ListOf>

        <ListOf title="Cursos" itemCount={courses.length} isOpen={coursesOpen} toggleList={toggleCourses}>
          {coursesOpen && courses.map(course => (
            <Item
              key={course.id}
              name={course.name}
              users={course.users}
              onClick={() => console.log(`${course.name} clicked`)}
            />
          ))}
        </ListOf>
      </div>

      <div className="column column-right">
        <p>Wallet-ID: <span>{/* Simula un hash aquí */}1234abcd5678efgh</span></p>
        <p>Descripción del usuario: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <ListOf title="Grupo" itemCount={groups.length} isOpen={groupsOpen} toggleList={toggleGroups}>
          {groupsOpen && groups.map(group => (
            <Item
              key={group.id}
              name={group.name}
              users={group.users}
              onClick={() => console.log(`${group.name} clicked`)}
            />
          ))}
        </ListOf>

        <ListOf title="Profesores Actuales" itemCount={currentProfessors.length} isOpen={professorsOpen} toggleList={toggleProfessors}>
          {professorsOpen && currentProfessors.map(prof => (
            <Item
              key={prof.id}
              name={prof.name}
              users={prof.users}
              onClick={() => console.log(`${prof.name} clicked`)}
            />
          ))}
        </ListOf>

        <ListOf title="Logs" itemCount={logs.length} isOpen={logsOpen} toggleList={toggleLogs}>
          {logsOpen && logs.map(log => (
            <Item
              key={log.id}
              name={`${log.action} - ${log.date}`}
              users={[]}
              onClick={() => console.log(`${log.action} clicked`)}
            />
          ))}
        </ListOf>
      </div>

      <div className="background-line" />
    </div>
  );
};

export default Profile;
