import React from 'react'

export const Register = () => {

  return (
    <div>
      <h2>Login</h2>
      <form>
      <div>
          <label>Email:</label>
          <input type="email" required />
        </div>
        <div>
          <label>Name:</label>
          <input type="name" required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" required />
        </div>
        <div>
          <label>Confirm password:</label>
          <input type="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}
