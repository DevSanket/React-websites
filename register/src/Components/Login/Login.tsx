import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Input from '../Input/Input';

const Login : React.FC = () => {
    const [username,setUsername] = useState<string>('');
  const [password,setPassword] = useState<string>('');
    return (
        <div className="login-card">
        <div className="title">LOGIN</div>
        <form className="login-form">
          <Input label="Username" value={username} setValue={setUsername} />
          <Input label="Password" value={password} setValue={setPassword} />
          <div className="button2">
            <span></span>
            <span></span>
            Login
            <span></span>
            <span></span>
          </div>
        </form>
        <div className="redirect-text">Not have an 
          <Link className="redirect" to="/register">Account</Link>
          ?</div>
      </div>
    );
}

export default Login;