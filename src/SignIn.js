import React from "react";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

function SignInForm() {
  const [state, setState] = React.useState({
    email: "",
    password: ""
  });

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
      const response = await fetch(`http://localhost:3001/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log("Login successful", responseData);
        toastr.success('Login Successful'); // Display success message
      } else {
        console.error("Login failed", response.statusText);
        toastr.error('Login Failed'); // Display error message
      }
    } catch (error) {
      console.error("Error occurred while logging in", error);
    }

    // Reset form fields
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
