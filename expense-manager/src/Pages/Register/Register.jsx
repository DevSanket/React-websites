import React, { Component } from "react";
import FormInput from "../../Components/form-input/form-input";
import { auth, createUserProfileDocument, signInwithGoogle } from "../../Firebase/firebase.utils";
import "./Register.scss";

class Register extends Component {
  state = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSignIn = async (event) => {
    event.preventDefault();
    const { email,password} = this.state;
    try{
      await auth.signInWithEmailAndPassword(email,password);
    }catch(error){
      alert("Enter Valid Details");
    }
    
  }

  handleSignUp = async (event) => {
    event.preventDefault();
    const { displayName,email,password,confirmPassword} = this.state;

    if(password !== confirmPassword){
      alert("Password Didn't Match");
      return;
    }

    if(password.length < 6){
      alert("Password Must be 6 Characters");
      return;
    }

    try{
      const {user} = await auth.createUserWithEmailAndPassword(email,password);

      await createUserProfileDocument(user,{displayName});
      
      this.setState({
        displayName:'',
        email:'',
        password:'',
        confirmPassword:''
      });

    }catch(error){
      alert(error.message);
    }

  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="register">
        <div className="title">Register</div>

        <div className="sign-up">
          <form onSubmit={this.handleSignUp} className="sign-up-form">
            <FormInput
              type="text"
              name="displayName"
              value={displayName}
              onChange={this.handleChange}
              label="Display Name"
              required
            />
            <FormInput
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              label="Email"
              required
            />
            <FormInput
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              label="Password"
              required
            />
            <FormInput
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={this.handleChange}
              label="Confirm Password"
              required
            />
            <div className="mybuttons">
              <button className="btn-grad" onClick={this.handleSignIn}>
                <div className="btn-text">SIGN IN</div>
              </button>
              <button type="submit" className="btn-grad">
                <div className="btn-text">SIGN UP</div>
              </button>
            </div>
          </form>
          <span className="line"></span>
          <div className="google-btn" onClick={signInwithGoogle}>
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google-button"
              />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>
        <p className="Note">Note - If You want to Sign In You need To Fill only Email and Password</p>
      </div>
    );
  }
}

export default Register;
