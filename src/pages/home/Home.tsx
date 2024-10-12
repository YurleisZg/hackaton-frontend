import React, { useState } from 'react';
import './Home.css'; // Asegúrate de crear este archivo CSS
import imgHackathon from '../../assets/hackathon.png'; // Cambia la ruta según la ubicación de tu imagen
import imgUdc from '../../assets/logo_udc.png'; // Cambia la ruta según la ubicación de tu imagen

const Home = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isTeacher, setIsTeacher] = useState(false); // Estado para identificar si es profesor
  const [courses, setCourses] = useState([
    { id: 1, name: 'Curso 1', selected: false },
    { id: 2, name: 'Curso 2', selected: false },
    { id: 3, name: 'Curso 3', selected: false },
    { id: 4, name: 'Curso 4', selected: false },
    { id: 5, name: 'Curso 5', selected: false },
    { id: 6, name: 'Curso 6', selected: false },
    { id: 7, name: 'Curso 7', selected: false },
    { id: 8, name: 'Curso 8', selected: false },
    { id: 9, name: 'Curso 9', selected: false },
    { id: 10, name: 'Curso 10', selected: false },
    { id: 11, name: 'Curso 11', selected: false },
    { id: 12, name: 'Curso 12', selected: false },
    { id: 13, name: 'Curso 13', selected: false },
    { id: 14, name: 'Curso 14', selected: false },
    { id: 15, name: 'Curso 15', selected: false },
  ]);
  
  const [animateCourses, setAnimateCourses] = useState(false); // Estado para manejar la animación

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleCourseChange = (id: unknown) => {
    setCourses(courses.map(course =>
      course.id === id ? { ...course, selected: !course.selected } : course
    ));
  };

  const handleTeacherToggle = () => {
    setIsTeacher(prev => {
      // Al cambiar isTeacher, reiniciamos la animación
      setAnimateCourses(true);
      setTimeout(() => setAnimateCourses(false), 0); // Reiniciamos la animación
      return !prev;
    });
  };

  return (
    <div className='home-content'>
      <div className="home-details">
        <div className='logos-container'>
          <img className="logo-udc" src={imgUdc} alt="" />
          <img className="logo-hackathon" src={imgHackathon} alt="" />
        </div>
      </div>
      <div className="form-container">
        <div className='form-change'>
          <div className={`form-wrapper ${isLogin ? 'show-login' : 'show-register'}`}>
            <div className="form login-form">
              <h2>Login</h2>
              <form onSubmit={() => {}}>
                <div className="form-group">
                  <label>ID:</label>
                  <input type="text" required placeholder="Enter your email" />
                </div>
                <div className="form-group">
                  <label>Password:</label>
                  <input type="password" required placeholder="Enter your password" />
                </div>
                <button type="submit">Login</button>
              </form>
            </div>

            <div className="form register-form">
              <h2>Register</h2>
              <form onSubmit={() => {}}>
                <div className="form-group">
                  <label>ID:</label>
                  <input type="text" required placeholder="Enter your email" />
                </div>
                <div className="form-group">
                  <label>Password:</label>
                  <input type="password" required placeholder="Enter your password" />
                </div>
                <button type="submit">Register</button>
              </form>

              {/* Slide Button para seleccionar entre Profesor y Estudiante */}
              <div className="slide-button-container">
                <label className="switch">
                  <input type="checkbox" checked={isTeacher} onChange={handleTeacherToggle} />
                  <span className="slider">
                    <span className="slider-text">{isTeacher ? 'Profesor' : 'Estudiante'}</span>
                  </span>
                </label>
              </div>

              {/* Checklist de cursos solo visible para profesores */}
              {isTeacher && (
                <>
                  <h3>Select Courses</h3>
                  <div className={`courses-container ${animateCourses ? 'show' : ''}`}>
                    {courses.map(course => (
                      <div key={course.id}>
                        <input
                          type="checkbox"
                          id={`course-${course.id}`}
                          checked={course.selected}
                          onChange={() => handleCourseChange(course.id)}
                        />
                        <label htmlFor={`course-${course.id}`}>{course.name}</label>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="toggle-button">
            <button onClick={toggleForm}>
              {isLogin ? 'Switch to Register' : 'Switch to Login'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
