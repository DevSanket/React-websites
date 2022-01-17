import React, { useState } from 'react'
import Input from '../Input/Input';
import './Register.scss';

export const Register = () => {
    const [username,setUsername] = useState<string>('');
    const [password,setPassword] = useState<string>('');
    const [confirmPassword,setConfirmPassword] = useState<string>('');
    const [email,setEmail] = useState<string>('');
    return ( 
        <div className='Register'>
            <div className="login-card">
        <div className="title">Register</div>
        <form className="login-form">
          <Input label="Username" value={username} setValue={setUsername} />
          <Input label="Email" value={email} setValue={setEmail} />
          <Input label="Password" value={password} setValue={setPassword} />
          <Input label="Confirm Password" value={confirmPassword} setValue={setConfirmPassword} />
          <div className="button2">
            <span></span>
            <span></span>
           
            Register
            <span></span>
            <span></span>
          </div>
        </form>
      </div>
        </div>
    )
}
