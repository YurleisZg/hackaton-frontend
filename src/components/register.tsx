import React, { useState } from 'react';
import { register } from '../services/auth';

export const Register = () => {
  const [user, setUser] = useState({
    id: '',
    name: '',
    email: '',
    password: '',
    wallet: '', 
    registration_hashstring: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Evita el comportamiento predeterminado del formulario

    const success = await register(user);
    if (success) {
      // Aquí puedes manejar el éxito, por ejemplo, redirigir al usuario
      alert('Registro exitoso');
    } else {
      // Manejar el error, por ejemplo, mostrando un mensaje
      alert('Error en el registro');
    }
  };

  return (
    <div>
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
      <div>
          <label>ID number: </label>
          <input type="text" name="id" value={user.id} onChange={handleChange} required />
        </div>
        <div>
          <label>Name: </label>
          <input type="text" name="name" value={user.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Email: </label>
          <input type="text" name="email" value={user.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Password: </label>
          <input type="text" name="password" value={user.password} onChange={handleChange} required />
        </div>
        <div>
          <label>Wallet: </label>
          <input type="text" name="wallet" value={user.wallet} onChange={handleChange} required />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Register;