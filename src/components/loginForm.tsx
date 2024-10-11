import {useState} from 'react'

const LoginForm = () => {

  return (
    <div>
      <h2>Login</h2>
      <form>
        <div>
          <label>Email:</label>
          <input type="email" required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

const RegisterForm = () => {
  return (
    <div>
      <h2>Register</h2>
      <form>
        <div>
          <label>Email: </label>
          <input type="email" required />
        </div>
        <div>
          <label>ID number: </label>
          <input type="id" required />
        </div>
        <div>
          <label>Name: </label>
          <input type="name" required />
        </div>
        <div>
          <label>Password: </label>
          <input type="password" required />
        </div>
        <div>
          <label>Confirm password: </label>
          <input type="password" required />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div>
      {isLogin ? <LoginForm /> : <RegisterForm />}
      
      <p>
        {isLogin ? (
          <>
            Don't you have an account?{' '}
            <button onClick={toggleForm}>Register</button>
          </>
        ) : (
          <>
            Do you have an account already?{' '}
            <button onClick={toggleForm}>Log in</button>
          </>
        )}
      </p>
    </div>
  );
};

export default AuthForm;
