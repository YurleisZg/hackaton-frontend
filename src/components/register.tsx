import React, { useState } from 'react';
import { register } from '../services/auth'; // Importa la función de registro

// Definimos la interfaz para el estado del usuario
interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  wallet: string;
}

const Register: React.FC = () => {
  // Inicializamos el estado de `user` con tipos definidos
  const [user, setUser] = useState<User>({
    id: '',
    name: '',
    email: '',
    password: '',
    wallet: ''
  });

  // Manejo de cambios en los campos del formulario
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  // Manejo del envío del formulario
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Evita el comportamiento predeterminado del formulario

    console.log(user);
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
      // Acciones en caso de éxito, por ejemplo, redirigir o mostrar un mensaje
      alert('Registro exitoso');
    } else {
      // Manejo de error, por ejemplo, mostrar mensaje de error
      alert('Error en el registro');
    }
  };

  return (
    <div>
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>ID number: </label>
          <input
            type="text"
            name="id"
            value={user.id}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Wallet: </label>
          <input
            type="text"
            name="wallet"
            value={user.wallet}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Register;
