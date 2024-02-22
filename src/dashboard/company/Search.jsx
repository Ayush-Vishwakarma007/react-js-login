import React, { useState } from 'react';
import './Search.css';

const Search = () => {
  const [volunteers, setVolunteers] = useState([
    {
      id: 1,
      name: 'John Doe',
      skills: ['Skill 1', 'Skill 2'],
      availability: 'Weekends',
      contactNumber: '123-456-7890',
      email: 'john@example.com',
      location: 'City A',
    },
    {
      id: 2,
      name: 'Jane Smith',
      skills: ['Skill 2', 'Skill 3'],
      availability: 'Evenings',
      contactNumber: '987-654-3210',
      email: 'jane@example.com',
      location: 'City B',
    },

  ]);

  const [filters, setFilters] = useState({
    skill: '',
    location: '',
    availability: '',
    search: '',
  });

  const handleApply = (volunteerId) => {
    // Handle apply logic for the event
    console.log(`Apointed Volunteer with ID: ${volunteerId}`);
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

  const handleGoButtonClick = () => {
    // Handle go button click
  };

  return (
    
    <div className="volunteer-list-container">
      <div className="filters">
        <div className="filter">
          <label htmlFor="skill">Skills:</label>
          <select
            id="skill"
            name="skill"
            value={filters.skill}  
            onChange={handleFilterChange}
          >
            <option value="">All</option>
            <option value="Skill 1">Skill 1</option>
            <option value="Skill 2">Skill 2</option>
            <option value="Skill 3">Skill 3</option>
          </select>
        </div>
        <div className="filter">
          <label htmlFor="location">Location:</label>
          <select
            id="location"
            name="location"
            value={filters.location}
            onChange={handleFilterChange}
          >
            <option value="">All</option>
            <option value="City A">City A</option>
            <option value="City B">City B</option>
            <option value="City C">City C</option>
          </select>
        </div>
        <div className="filter">
          <label htmlFor="availability">Availability:</label>
          <select
            id="availability"
            name="availability"
            value={filters.availability}
            onChange={handleFilterChange}
          >
            <option value="">All</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="search">
          <input
            type="text"
            placeholder="Search by name..."
            name="search"
            value={filters.search}
            onChange={handleFilterChange}
          />
        </div>
        <div className="go-button">
          <button onClick={handleGoButtonClick}>Go</button>
        </div>
      </div>
      <div className="volunteers">
        <h2>Volunteers</h2>
        <ul>
          {filteredVolunteers.map((volunteer) => (
            <li key={volunteer.id}>
              <div className="volunteer-details">
                <h3>{volunteer.name}</h3>
                <p>Skills: {volunteer.skills.join(', ')}</p>
                <p>Availability: {volunteer.availability ? 'Yes' : 'No'}</p>
                <p>Contact Number: {volunteer.contactNumber}</p>
                <p>Email: {volunteer.email}</p>
                <p>Location: {volunteer.location}</p>
                <button onClick={() => handleApply(volunteer.id)} className="apoint-button">Apoint</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Search;
