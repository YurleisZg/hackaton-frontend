import { useState } from 'react';
import './App.css';
import { Login } from './components/login';
import Register from './components/register';
import TeacherRegister from './components/techerRegister'; // Corrige el nombre del archivo

function App() {
  const [currentComponent, setCurrentComponent] = useState<string>('login'); // Estado para controlar el componente a mostrar

  return (
    <>
      <div>
        {/* Botones para alternar entre Login, Register y Teacher Register */}
        <button onClick={() => setCurrentComponent('login')}>Login</button>
        <button onClick={() => setCurrentComponent('register')}>Register</button>
        <button onClick={() => setCurrentComponent('teacherRegister')}>Teacher Register</button>
      </div>

      {/* Renderiza el componente según el estado */}
      {currentComponent === 'login' && <Login />}
      {currentComponent === 'register' && <Register />}
      {currentComponent === 'teacherRegister' && <TeacherRegister />}
    </>
  );
}

export default App;
