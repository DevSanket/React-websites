import React from 'react';
import './App.css';

const App : React.FC = () => {
  return (
    <div className="App">
      <div className="login-card">
       <form className='login-form'>
       <input className='input' type="text" placeholder='Enter Username' />
        <input className='input' type="text" placeholder="Enter Password" />
        <button className='form-button' type='submit'>Login</button>
       </form>
      </div>
    </div>
  )
}
export default App;
