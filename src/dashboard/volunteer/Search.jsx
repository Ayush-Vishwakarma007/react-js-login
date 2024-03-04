import React, { useState, useEffect } from 'react';
import BASE_URL from '../../configuration';
import toastr from "toastr";
import './Search.css'; // Import the CSS file for styling

function VolSearch() {
  const [events, setEvents] = useState([]);
  const [filters, setFilters] = useState({
    location: 'All',
    date: 'All',
    companyName: 'All',
    time: 'All',
    searchTerm: '',
  });

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSearchChange = (e) => {
    setFilters({ ...filters, searchTerm: e.target.value });
  };

  const handleGoClick = () => {
    // Handle Go button click here
    console.log('Go button clicked');
  };

  const handleApply = async (eventId) => {
    try {
      const userId = JSON.parse(localStorage.getItem('userDetail')).id
      const data = {
        userId: JSON.stringify(userId)
      }
      const str_eventId = JSON.stringify(eventId)
      const response = await fetch(`${BASE_URL}event/${str_eventId}/appliedBy`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      const responseData = await response.json();
      if (responseData['status']['code'] === 200) {
        toastr.success(responseData['status']['description']);
      } else {
        toastr.error(responseData['status']['description']);
      }
      const new_event_id = {
        id:userId
      }
      const response_event_id = await fetch(`${BASE_URL}auth/users/${eventId}`,{
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(new_event_id)
      })
      const new_respnse = await response_event_id.json();
      
    }catch (error){
      console.error("Something went wrong", error);
    }
  };

  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await fetch(`${BASE_URL}event/getAll`);
        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }
        const data = await response.json();
        setEvents(data['data']);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    }

    fetchEvents();
  }, []);
  return (
    <div className="events-container">
      <h2>Events</h2>
      <div className="filters">
        <label>
          Location:
          <select name="location" value={filters.location} onChange={handleFilterChange}>
            <option value="All">All</option>
            {events.map(event => (
              <option key={event.id} value={event.event_location}>{event.event_location}</option>
            ))}
          </select>
        </label>
        <label>
          Date:
          <select name="date" value={filters.date} onChange={handleFilterChange}>
            <option value="All">All</option>
            {events.map(event => (
              <option key={event.id} value={event.event_date}>{event.event_date}</option>
            ))}
          </select>
        </label>
        <label>
          Company Name:
          <select name="companyName" value={filters.companyName} onChange={handleFilterChange}>
            <option value="All">All</option>
            {events.map(event => (
              <option key={event.id} value={event.company_name}>{event.company_name}</option>
            ))}
          </select>
        </label>
        <label>
          Time:
          <select name="time" value={filters.time} onChange={handleFilterChange}>
            <option value="All">All</option>
            {events.map(event => (
              <option key={event.id} value={event.event_time}>{event.event_time}</option>
            ))}
          </select>
        </label>
        <label style={{ display: 'flex', alignItems: 'center' }}>
          Search:
          <input
            type="text"
            placeholder="Search by title"
            value={filters.searchTerm}
            onChange={handleSearchChange}
          />
          <button onClick={handleGoClick} className="go-button">Go</button>
        </label>

      </div>
      <ul className="events-list">
        {events
          .filter(event => (filters.location === 'All' || event.event_location === filters.location)
            && (filters.date === 'All' || event.event_date === filters.date)
            && (filters.companyName === 'All' || event.company_name === filters.companyName)
            && (filters.time === 'All' || event.time === filters.time)
            && (filters.searchTerm === '' || event.project_name.toLowerCase().includes(filters.searchTerm)))
          .map(event => (
            <li key={event.id} className="event-item">
              <div className="event-details">
                <h3 className="event-title">{event.project_name}</h3>
                <p className="event-info">Company: {event.company_name}</p>
                <p className="event-info">Organizer: {event.organiser_name}</p>
                <p className="event-info">Location: {event.event_location}</p>
                <p className="event-info">Date: {event.event_date}</p>
                <p className="event-info">Time: {event.event_time}</p>
                <p className="event-info">Contact Number: {event.phone}</p>
                <p className="event-info">Email: {event.email}</p>
                <p className="event-description">{event.description}</p>
                <button onClick={() => handleApply(event.id)} className="apply-button">Apply</button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default VolSearch;
