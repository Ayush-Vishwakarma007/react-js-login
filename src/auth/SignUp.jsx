import React from "react";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import BASE_URL from "../configuration";
import { useNavigate } from 'react-router-dom';



function SignUpForm() {
  const navigate = useNavigate(); 

  const [state, setState] = React.useState({
    name: "",
    email: "",
    password: "",
    role: ""
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

    const { name, email, password, role } = state;
    const data = {
      name: name,
      email: email,
      password: password,
      role: role
    };
    try {
      const response = await fetch(`${BASE_URL}auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        const responseData = await response.json();
        toastr.success('Signup Successful');
      } else {
        toastr.error('Something went wrong please try again later');
        console.error("Signup failed", response.statusText);
      }
    } catch (error) {
      console.error("Error occurred while signing up", error);
    }

    for (const key in state) {
      setState({
        ...state,
        [key]: ""
      });
    }
  };

  return (
    <div className="form-container sign-up-container">
      <form onSubmit={handleOnSubmit}>
        <h1>Create Account</h1>
        
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
          placeholder="Name" required
        />
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          placeholder="Email" required
        />
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          placeholder="Password" required
        />
        <h5>Select type of user:</h5>
        <select name="role" value={state.role} onChange={handleChange}>
          <option value="">Select type of user:</option>
          <option value="VOLUNTEER">Volunteer</option>
          <option value="COMPANY">Company</option>
        </select>
        <br></br>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;
