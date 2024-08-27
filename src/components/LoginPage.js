import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../utils/index.css';
const LoginPage = () => {
    const [username, setUsername] = useState('');
    const navigate = useNavigate(); // Use useNavigate instead of useHistory

    const handleLogin = (e) => {
        e.preventDefault();
        if (username) {
            localStorage.setItem('username', username);
            navigate('/tasks'); // Use navigate instead of history.push
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleLogin}>
                <h2>Login</h2>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter username"
                    required
                />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default LoginPage;
