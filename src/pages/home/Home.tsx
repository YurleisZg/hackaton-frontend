import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa el hook useNavigate
import './Home.css'; 
import imgHackathon from '../../assets/hackathon.png';
import imgUdc from '../../assets/logo_udc.png';
import { register, login } from '../../services/auth'; 

interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  wallet: string;
}

interface UserLogin {
  username: string;
  password: string;
}

const Home = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isTeacher, setIsTeacher] = useState(false);
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

  const [animateCourses, setAnimateCourses] = useState(false);
  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate(); // Instancia del hook useNavigate

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
      setAnimateCourses(true);
      setTimeout(() => setAnimateCourses(false), 0);
      return !prev;
    });
  };

  const handleSubmitLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const userLogin: UserLogin = { username: id, password };
    const isSuccess = await login(userLogin);

    if (!isSuccess) {
      setError('Login failed. Please check your credentials.');
    } else {
      console.log('Login successful!');
      navigate('/profile'); // Redirecciona a /profile después de login exitoso
    }

    setLoading(false);
  };

  const [user, setUser] = useState<User>({
    id: '',
    name: '',
    email: '',
    password: '',
    wallet: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmitRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
      wallet: user.wallet,
      registration_hash: "1234567890"
    };

    const success = await register(data);
    if (success) {
      alert('Registro exitoso');
    } else {
      alert('Error en el registro');
    }
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
              <form onSubmit={handleSubmitLogin}>
                <div className="form-group">
                  <label>ID: </label>
                  <input type="text" value={id} 
                  onChange={(e) => setId(e.target.value)} 
                  required placeholder="Enter your email" />
                </div>
                <div className="form-group">
                  <label>Password: </label>
                  <input type="password" value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  required placeholder="Enter your password" />
                </div>
                {error && <div className="error-message">{error}</div>}
                <button type="submit" disabled={loading}>
                  {loading ? 'Logging in...' : 'Login'}
                </button>
              </form>
            </div>

            <div className="form register-form">
              <h2>Register</h2>
              <form onSubmit={handleSubmitRegister}>
                <div className="form-group">
                  <label>ID: </label>
                  <input type="text" value={user.id} onChange={handleChange} required placeholder="Enter your ID number" />
                </div>
                <div className="form-group">
                  <label>Name: </label>
                  <input type="text" value={user.name} onChange={handleChange} required placeholder="Enter your name" />
                </div>
                <div className="form-group">
                  <label>Email: </label>
                  <input type="email" value={user.email} onChange={handleChange} required placeholder="Enter your email address" />
                </div>
                <div className="form-group">
                  <label>Password: </label>
                  <input type="password" value={user.password} onChange={handleChange} required placeholder="Enter your password" />
                </div>
                <div className="form-group">
                  <label>Wallet: </label>
                  <input type="text" value={user.wallet} onChange={handleChange} required placeholder="Enter your wallet number" />
                </div>
                <button type="submit">Register</button>
              </form>

              <div className="slide-button-container">
                <label className="switch">
                  <input type="checkbox" checked={isTeacher} onChange={handleTeacherToggle} />
                  <span className="slider">
                    <span className="slider-text">{isTeacher ? 'Profesor' : 'Estudiante'}</span>
                  </span>
                </label>
              </div>

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
