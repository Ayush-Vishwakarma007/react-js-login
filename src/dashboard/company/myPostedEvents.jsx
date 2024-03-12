/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import BASE_URL from '../../configuration';
import './myPostedEvents.css';
import toastr from 'toastr';

const MyPostedEvents = () => {
  const [volunteers, setVolunteers] = useState([]);

  const [filters, setFilters] = useState({
    skill: '',
    location: '',
    availability: '',
    search: '',
  });

  const handleApply = async (volunteerId) => {
    try {
      const userId = JSON.parse(localStorage.getItem('userDetail')).id
      const data = {
        id: userId
      }
      const response = await fetch(`${BASE_URL}auth/appointedBy/${volunteerId}`,{
        method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
      })
      const json_response = await response.json();
      if(json_response['status']['code'] === 200){
        toastr.success(json_response['status']['description'])
      }else {
        toastr.error(json_response['status']['description'])
      }
    } catch (error) {
      toastr.error("Something went wrong, Please try after sometime")
    }
    
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const filteredVolunteers = volunteers?.filter((volunteer) => {
    return (
      (filters.skill === '' || volunteer.skills.includes(filters.skill)) &&
      (filters.location === '' || volunteer.location === filters.location) &&
      (filters.availability === '' ||
        (filters.availability === 'Yes' && volunteer.availability) ||
        (filters.availability === 'No' && !volunteer.availability)) &&
      (filters.search === '' ||
        volunteer.name.toLowerCase().includes(filters.search.toLowerCase()))
    );
  });

  useEffect(() => {
    async function fetchVolunteers() {
      try {
        const userId = JSON.parse(localStorage.getItem('userDetail')).id
        const response = await fetch(`${BASE_URL}event/${userId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch volunteers');
        }
        const data = await response.json();
        setVolunteers(data['data']);
      } catch (error) {
        console.error('Error fetching volunteers:', error);
      }
    }
    fetchVolunteers();
  }, []);

  const handleGoButtonClick = () => {
  };

  const getUniqueSkills = () => {
    const skills = volunteers?.map((volunteer) => volunteer.skills).flat();
    return Array.from(new Set(skills));
  };

  const getUniqueLocations = () => {
    return Array.from(new Set(volunteers?.map((volunteer) => volunteer.location)));
  };

  return (
    
    <div className="volunteer-list-container">
      {/* <div className="filters">
        <div className="filter">
          <label htmlFor="skill">Skills:</label>
          <select id="skill" name="skill" value={filters.skill} onChange={handleFilterChange}>
            <option value="">All</option>
            {getUniqueSkills().map((skill) => (
              <option key={skill} value={skill}>
                {skill}
              </option>
            ))}
          </select>
        </div>
        <div className="filter">
          <label htmlFor="location">Location:</label>
          <select id="location" name="location" value={filters.location} onChange={handleFilterChange}>
            <option value="">All</option>
            {getUniqueLocations().map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>
        <div className="search">
          <input type="text" placeholder="Search by name..." name="search" value={filters.search} onChange={handleFilterChange} />
        </div>
        <div className="go-button">
          <button onClick={handleGoButtonClick}>Go</button>
        </div>
      </div> */}
      <div className="volunteers">
        <h2>My Hosted Evets</h2>
        {filteredVolunteers?.length === 0 ? (
          <h5>No Events Found.</h5>
        ) : (
          <ul>
            {filteredVolunteers?.map((volunteer) => (
              <li key={volunteer.id}>
                <div className="volunteer-details">
                <h3 className="event-title">{volunteer.project_name}</h3>
                <p className="event-info">Company: {volunteer.company_name}</p>
                <p className="event-info">Organizer: {volunteer.organiser_name}</p>
                <p className="event-info">Location: {volunteer.event_location}</p>
                <p className="event-info">Date: {volunteer.event_date}</p>
                <p className="event-info">Time: {volunteer.event_time}</p>
                <p className="event-info">Contact Number: {volunteer.phone}</p>
                <p className="event-info">Email: {volunteer.email}</p>
                <p className='event-info'>Status: Active</p>
                <p className="event-description">{volunteer.description}</p>                
                {/* <button onClick={() => handleApply(volunteer.id)} className="appoint-button">Appoint</button> */}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default MyPostedEvents;
