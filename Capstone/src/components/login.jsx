import React, { useState } from 'react';
import { userLogin } from '../api/ajax';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();
  
    const handleLogin = async (e) => {
      e.preventDefault();
  
      try {
        const response = await userLogin(username, password);
  
        // Check if response contains a token
        if (response && response.token) {
          // Handle successful login (e.g., store token, navigate to dashboard)
          console.log('Login successful!');
        } else {
          // Handle login error
          setError('Invalid username or password');
        }
      } catch (err) {
        console.error('Login failed:', err);
        setError('An error occurred while logging in');
      }
    };
  
    return (
      <div>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
        {error && <p>{error}</p>}
      </div>
    );
}



