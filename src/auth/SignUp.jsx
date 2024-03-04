import React, { useState } from "react";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import BASE_URL from "../configuration";
import { useNavigate } from 'react-router-dom';

function SignUpForm() {
  const navigate = useNavigate(); 

  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
    skills: [],
    phone: "",
    location: ""
  });

  const handleChange = evt => {
    const { name, value } = evt.target;
    setState(prevState => ({
      ...prevState,
      [name]: name === "skills" ? value.split(',').map(skill => skill.trim()) : value
    }));
  };

  const validateInputs = () => {
    if (!state.name || !state.email || !state.password || !state.role) {
      toastr.error('All fields are required');
      return false;
    }
    if (state.role === "VOLUNTEER" && state.skills.length === 0) {
      toastr.error('Skills field is required for volunteers');
      return false;
    }
    return true;
  };

  const handleOnSubmit = async evt => {
    evt.preventDefault();

    if (!validateInputs()) {
      return;
    }

    const { name, email, password, role, skills, phone, location } = state;
    const data = {
      name: name,
      email: email,
      password: password,
      role: role,
      skills: skills,
      phone: phone,
      location: location
    };
    console.log("Data__: ", data)
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

    setState({
      name: "",
      email: "",
      password: "",
      role: "",
      skills: [],
      phone: "",
      location: ""
    });
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
        <input
          type="text"
          name="phone"
          value={state.phone}
          onChange={handleChange}
          placeholder="Phone"
        />
        <input
          type="text"
          name="location"
          value={state.location}
          onChange={handleChange}
          placeholder="Location"
        />
        <h5>Select type of user:</h5>
        <select name="role" value={state.role} onChange={handleChange} required>
          <option value="">Select type of user:</option>
          <option value="VOLUNTEER">Volunteer</option>
          <option value="COMPANY">Company</option>
        </select>
        {state.role === "VOLUNTEER" && (
          <div>
            <input
              type="text"
              name="skills"
              value={state.skills.join(', ')}
              onChange={handleChange}
              placeholder="Skills (comma separated)"
            />
          </div>
        )}
        <br></br>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;
