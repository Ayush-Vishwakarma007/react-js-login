import React, { useState } from 'react';
import BASE_URL from '../../configuration';
import './edit-user.css'
import toastr from 'toastr';

function EditUser() {
  const [formData, setFormData] = useState({
    company_name: '',
    project_name: '',
    organiser_name: '',
    event_location: '',
    event_date: '',
    event_time: '',
    event_title: '',
    phone: '',
    email: '',
    description: ''
  });

  const initialFormData = {
    company_name: '',
    project_name: '',
    organiser_name: '',
    event_location: '',
    event_date: '',
    event_time: '',
    event_title: '',
    phone: '',
    email: '',
    description: ''
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userId = JSON.parse(localStorage.getItem('userDetail')).id
      const response = await fetch(`${BASE_URL}event/event_post/${userId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const responseData = await response.json();
      if(responseData['status']['code'] === 200){
        toastr.success(responseData['status']['description'])
        setFormData(initialFormData);
      }else{
        toastr.error(responseData['status']['description'])
      }
    } catch (error) {
      console.error('Error submitting form data:', error.message);
    }
  };

  return (
    <div className='container'>
      <form className="form-container_post" onSubmit={handleSubmit}>
        <h2>Edit user details</h2>
        <input className="input-field" type="text" name="company_name" value={formData.company_name} onChange={handleChange} placeholder="Company Name" />
        <input className="input-field" type="text" name="project_name" value={formData.project_name} onChange={handleChange} placeholder="Project Name" />
        <input className="input-field" type="text" name="organiser_name" value={formData.organiser_name} onChange={handleChange} placeholder="Organiser Name" />
        <input className="input-field" type="text" name="event_location" value={formData.event_location} onChange={handleChange} placeholder="Event Location" />
        <input className="input-field" type="date" name="event_date" value={formData.event_date} onChange={handleChange} placeholder="Event Date" />
        <input className="input-field" type="time" name="event_time" value={formData.event_time} onChange={handleChange} placeholder="Event Time" />
        <input className="input-field" type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" />
        <input className="input-field" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
        <textarea style={{ width: '100%' }} className="input-field" name="description" value={formData.description} onChange={handleChange} placeholder="Description"></textarea>
        <button style={{ padding: '10px', background: 'blue', color: 'white', margin: '15px', borderRadius: '10px', border: 'none' }} className="submit-button" type="submit">Post</button>
      </form>
    </div>
  );  
}

export default EditUser;
