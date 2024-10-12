import React, { useState } from 'react';
import { login } from '../services/auth'; // Importa la función de login

// Definimos el tipo para los datos de login
interface UserLogin {
  id: string;
  password: string;
}

export const Login: React.FC = () => {
  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Llamamos a la función login pasando el id (email) y password
    const userLogin: UserLogin = { id: id, password };
    const isSuccess = await login(userLogin);

    if (!isSuccess) {
      setError('Login failed. Please check your credentials.');
    } else {
      // Acciones a realizar si el login es exitoso
      console.log('Login successful!');
    }

    setLoading(false);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label>id:</label>
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
          />
        </div>
        {error && <div className="error-message">{error}</div>}
        <button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
};
export default Login;
