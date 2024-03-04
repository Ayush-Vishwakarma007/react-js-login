/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useNavigate } from 'react-router-dom';
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import BASE_URL from "../configuration";

function SignInForm() {
  const [state, setState] = React.useState({
    email: "",
    password: ""
  });
  toastr.options = {
    "closeButton": true
  }
  const navigate = useNavigate(); 

  const handleChange = evt => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  };

  const handleOnSubmit = async evt => {
    evt.preventDefault();    
    const { email, password } = state;
    const data = {
      email: email,
      password: password
    };    

    try {
      const response = await fetch(`${BASE_URL}auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      let responseData
      if(response.ok){
        const contentType = response.headers.get('content-type');
        if(contentType && contentType.includes('application/json')){
           responseData = await response.json();
        }else{
           responseData = await response.text();        } 
      }
      if (responseData['status']['code'] === 200) {
        localStorage.setItem('userDetail', JSON.stringify(responseData['data']['user']))
        localStorage.setItem('token', JSON.stringify(responseData['data']['token']))
        toastr.success('Login Successful');
        if(responseData['data']['user']['role'] === 'COMPANY'){
          navigate('/com-home');
        }else {
          navigate('/vol-home')
        }
      } else {
        console.error("Login failed", response.statusText);
        toastr.error('Login Failed');
      }
    } catch (error) {
      console.error("Error occurred while logging in", error);
    }
    for (const key in state) {
      setState({
        ...state,
        [key]: ""
      });
    }
  };

  return (
    <div className="form-container sign-in-container">
      <form onSubmit={handleOnSubmit}>
        <h1>Sign in</h1>

        <input
          type="email"
          placeholder="Email"
          name="email"
          value={state.email}
          onChange={handleChange} required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange} required
        />
        
        <a href="#">Forgot your password?</a>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default SignInForm;
