import React, { useState } from 'react';
import './Profile.css'; // Import the CSS file for styling

function Profile() {
  const [showProfileForm, setShowProfileForm] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    address: '',
    description: '',
    phoneNumber: '',
    available: false,
    skills: {
      programming: false,
      design: false,
      writing: false,
      marketing: false,
    },
  });

  const toggleProfileForm = () => {
    setShowProfileForm(!showProfileForm);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setProfileData({
        ...profileData,
        skills: {
          ...profileData.skills,
          [name]: checked,
        },
      });
    } else {
      setProfileData({ ...profileData, [name]: value });
    }
  };

  const handleSave = () => {
    // Handle save logic here (e.g., API call to update profile)
    console.log('Profile data saved:', profileData);
    setShowProfileForm(false); // Close the form after saving
  };

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      <div className="dropdown">
        <button className="dropbtn">Options</button>
        <div className="dropdown-content">
          <button onClick={toggleProfileForm}>Edit Profile</button>
          <button>Log Out</button>
        </div>
      </div>
      {showProfileForm && (
        <div className="profile-form">
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={profileData.firstName}
              onChange={handleChange}
              className="profile-input"
            />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={profileData.lastName}
              onChange={handleChange}
              className="profile-input"
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={profileData.email}
              onChange={handleChange}
              className="profile-input"
            />
          </label>
          <label>
            Address:
            <input
              type="text"
              name="address"
              value={profileData.address}
              onChange={handleChange}
              className="profile-input"
            />
          </label>
          <label>
            Description:
            <textarea
              name="description"
              value={profileData.description}
              onChange={handleChange}
              className="profile-textarea"
            />
          </label>
          <label>
            Phone Number:
            <input
              type="text"
              name="phoneNumber"
              value={profileData.phoneNumber}
              onChange={handleChange}
              className="profile-input"
            />
          </label>
          <label>
            Availability:
            <select name="available" value={profileData.available} onChange={handleChange} className="profile-input">
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </select>
          </label>
          <label>
            Skills:
            <div className="profile-skills">
              <label>
                <input
                  type="checkbox"
                  name="programming"
                  checked={profileData.skills.programming}
                  onChange={handleChange}
                />
                Programming
              </label>
              <label>
                <input
                  type="checkbox"
                  name="design"
                  checked={profileData.skills.design}
                  onChange={handleChange}
                />
                Design
              </label>
              <label>
                <input
                  type="checkbox"
                  name="writing"
                  checked={profileData.skills.writing}
                  onChange={handleChange}
                />
                Writing
              </label>
              <label>
                <input
                  type="checkbox"
                  name="marketing"
                  checked={profileData.skills.marketing}
                  onChange={handleChange}
                />
                Marketing
              </label>
            </div>
          </label>
          <button onClick={handleSave} className="profile-button">Save</button>
        </div>
      )}
    </div>
  );
}

export default Profile;
