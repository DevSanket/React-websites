import React, { useState } from "react";
import { connect } from "react-redux";
// import { auth, createUserProfileDocument } from "../../Firebase/firebase.utils";
import { signUpStart } from "../../Redux/User/user.actions";
import CustomButton from "../CustomButton/custom-button";
import FormInput from "../form-input/form-input";
import "./sign-up.scss";

const SignUp = ({signUpStart}) => {
  const [userCredentials,setCredentials] = useState({
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();
   
    // const { signUpStart } = this.props;
    if (password !== confirmPassword) {
      alert("Password don't Match");
      return;
    }
    if(password.length < 6){
        alert('Password Must Be 6 Characters');
        return;
    }

    signUpStart({displayName,email,password,confirmPassword});
   
  };

  const handleChange = e => {
      const { name , value} = e.target;
      setCredentials({...userCredentials,[name]:value});
  }

  
    // const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have a account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
            label="Confirm Password"
            required
          />
          <CustomButton type="submit"> SIGN UP </CustomButton>
        </form>
        
      </div>
    );
  }


const mapDispatchToProps = dispatch => ({
  signUpStart : userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(null,mapDispatchToProps)(SignUp);
