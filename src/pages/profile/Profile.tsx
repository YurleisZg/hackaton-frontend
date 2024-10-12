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
    { id: 1, name: "Certificación en Inteligencia Artificial (CS108)", users: [] },
    { id: 2, name: "Certificación en Desarrollo Full Stack (CS121)", users: [] },
  ];

  const courses = [
    { id: 1, name: "Programación Web (CS107)", users: [] },
    { id: 2, name: "Criptografía y Seguridad de la Información (CS117)", users: [] },
    { id: 3, name: "Ciencia de Datos (CS112)", users: [] },
  ];

  const groups = [
    { id: 1, name: "Grupo de Estudio de IA", users: [] },
    { id: 2, name: "Grupo de Desarrollo Web", users: [] },
  ];

  const currentProfessors = [
    { id: 1, name: "Profesor de Ciencia de Datos", subject: "Ciencia de Datos", users: [{ id: 1, name: 'User 1', avatar }] },
    { id: 2, name: "Profesor de Programación Web", subject: "Programación Web", users: [{ id: 2, name: 'User 2', avatar }] },
  ];

  const logs = [
    { id: 1, action: "Inscripción en Curso: Criptografía y Seguridad de la Información", date: "2024-10-01" },
    { id: 2, action: "Finalización del Curso: Programación Web", date: "2024-09-30" },
    { id: 3, action: "Asistencia a Clase de Ciencia de Datos", date: "2024-09-25" },
  ];

  return (
    <div className="container">
      <div className="column column-left">
        <img className="circular-image" src={avatar} alt="Avatar" style={{ width: '215px', height: '215px' }} />
        <h2>Mark Zuckerberg</h2>
        <p>Tipo de usuario: Profesor</p>
        <p>Precio por hora: $500/hrs</p>
        
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
        <p>Wallet-ID: <span>0x62feEa197EA26131E97A6BBd1ddbebb93f4b43cF</span></p><br></br>
        <p>Descripción del usuario: Co-fundador de Facebook, apasionado por la tecnología, la educación y la inteligencia artificial.</p>

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
