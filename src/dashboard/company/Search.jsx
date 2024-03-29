import React, { useState, useEffect } from 'react';
import BASE_URL from '../../configuration';
import './Search.css';
import toastr from 'toastr';

const Search = () => {
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
        id: JSON.stringify(userId)
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

  const filteredVolunteers = volunteers.filter((volunteer) => {
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
        // Fetch data from the API
        const response = await fetch(`${BASE_URL}auth/getAllVolunteers`);
        if (!response.ok) {
          throw new Error('Failed to fetch volunteers');
        }
        const data = await response.json();
        setVolunteers(data['data']);
      } catch (error) {
        console.error('Error fetching volunteers:', error);
      }
    }

    // Call the fetchVolunteers function when the component mounts
    fetchVolunteers();
  }, []);

  const handleGoButtonClick = () => {
    // Handle go button click
  };

  const getUniqueSkills = () => {
    const skills = volunteers.map((volunteer) => volunteer.skills).flat();
    return Array.from(new Set(skills));
  };

  const getUniqueLocations = () => {
    return Array.from(new Set(volunteers.map((volunteer) => volunteer.location)));
  };

  return (
    
    <div className="volunteer-list-container">
      <div className="filters">
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
      </div>
      <div className="volunteers">
        <h2>Volunteers</h2>
        {filteredVolunteers.length === 0 ? (
          <h5>No volunteers found.</h5>
        ) : (
          <ul>
            {filteredVolunteers.map((volunteer) => (
              <li key={volunteer.id}>
                <div className="volunteer-details">
                  <h3>{volunteer.name}</h3>
                  <p>Skills: {volunteer.skills.join(', ')}</p>
                  <p>Contact Number: {volunteer.contactNumber}</p>
                  <p>Email: {volunteer.email}</p>
                  <p>Location: {volunteer.location}</p>
                  <button onClick={() => handleApply(volunteer.id)} className="appoint-button">Appoint</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Search;
