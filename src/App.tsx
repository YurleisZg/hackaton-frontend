import { useState } from 'react';
import './App.css';
import { Login } from './components/login';
import Register from './components/register';
import Home from './pages/home/Home';

function App() {
  const [isLogin, setIsLogin] = useState(true); // Estado para controlar el componente a mostrar

  return (
    <>
    <Home></Home>

      {/* <div>
        <button onClick={() => setIsLogin(true)}>Login</button>
        <button onClick={() => setIsLogin(false)}>Register</button>
      </div> */}

      {/* Renderiza el componente según el estado */}
      {/* {isLogin ? <Login /> : <Register />} */}

    </>
  );
}

export default App;
