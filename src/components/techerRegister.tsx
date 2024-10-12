import React, { useState } from 'react';
import { teacherRegistration } from '../services/teacherRegistration'; // Asegúrate de que la ruta sea correcta

const TeacherRegister: React.FC = () => {
  const [hourValue, setHourValue] = useState<number>(0); // Inicializa con 0
  const [courses, setCourses] = useState<string[]>([]);
  const [newCourse, setNewCourse] = useState<string>('');
  const [registrationSuccess, setRegistrationSuccess] = useState<boolean | null>(null); // Para manejar el estado de registro

  // Manejo de cambios en el campo de precio por hora
  const handleHourChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    // Asegúrate de que el valor no sea negativo
    if (value >= 0) {
      setHourValue(value);
    }
  };

  // Función para agregar un nuevo curso
  const addCourse = () => {
    if (newCourse) {
      setCourses([...courses, newCourse]);
      setNewCourse(''); // Limpiar el campo de entrada
    }
  };

  // Manejo del envío del formulario
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Evita el comportamiento predeterminado del formulario

    const teacherData = {
      hour_value: hourValue,
      courses: courses
    };

    // Mostrar los datos en consola antes de enviarlos
    console.log('Datos a enviar al backend:', teacherData);

    const success = await teacherRegistration(teacherData);
    setRegistrationSuccess(success); // Actualizar el estado según el resultado
  };

  return (
    <div>
      <h2>Registrar Profesor</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Precio por hora:</label>
          <input
            type="number"
            value={hourValue}
            onChange={handleHourChange}
            required
          />
        </div>
        <div>
          <label>Curso:</label>
          <input
            type="text"
            value={newCourse}
            onChange={(e) => setNewCourse(e.target.value)}
            placeholder="Ingrese el nombre del curso"
            required
          />
          <button type="button" onClick={addCourse}>Agregar Curso</button>
        </div>
        <ul>
          {courses.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>
        <button type="submit">Guardar y Registrar</button>
      </form>
      {registrationSuccess !== null && (
        <div>
          {registrationSuccess ? (
            <p>Profesor registrado con éxito.</p>
          ) : (
            <p>Error al registrar al profesor.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default TeacherRegister;
