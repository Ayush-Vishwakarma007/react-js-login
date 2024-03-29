  import React, { useState } from "react";
  import SignInForm from "../auth/SignIn";
  import SignUpForm from "../auth/SignUp";
  import './home.css'

  function HomeMain(){
    const [type, setType] = useState("signIn");
    const handleOnClick = text => {
      if (text !== type) {
        setType(text);
        return;
      }
    };
    const containerClass = "container-box " + (type === "signUp" ? "right-panel-active" : "");
    return(
      <div className="App">
          <div className={containerClass} id="container">
          <h2>Sign in/up Form</h2>
            <SignUpForm/>
            <SignInForm/>
            <div className="overlay-container">
              <div className="overlay">
                <div className="overlay-panel overlay-left">
                  <h1>Welcome Back!</h1>
                  <p>
                    To keep connected with us please login with your personal info
                  </p>
                  <button
                    className="ghost btn"
                    id="signIn"
                    onClick={() => handleOnClick("signIn")}
                  >
                    Sign In
                  </button>
                </div>
                <div className="overlay-panel overlay-right">
                  <h1>Hello, Friend!</h1>
                  <p>Enter your personal details and start journey with us</p>
                  <button
                    className="ghost btn"
                    id="signUp"
                    onClick={() => handleOnClick("signUp")}
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
      </div>
    );  
  }

  export default HomeMain;