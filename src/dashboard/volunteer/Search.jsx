import React, { useState } from 'react';
import './Search.css'; // Import the CSS file for styling

function VolSearch() {
  // Sample data for events
  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'Tech Conference 2024',
      companyName: 'TechCorp',
      organizerName: 'John Smith',
      location: 'Convention Center',
      date: '2024-03-20',
      time: '10:00 AM - 4:00 PM',
      contactNumber: '123-456-7890',
      email: 'john@example.com',
      description: 'Join us for the biggest tech conference of the year!',
    },
    {
      id: 2,
      title: 'Startup Workshop',
      companyName: 'StartupHub',
      organizerName: 'Jane Doe',
      location: 'StartupHub Office',
      date: '2024-04-05',
      time: '2:00 PM - 5:00 PM',
      contactNumber: '987-654-3210',
      email: 'jane@example.com',
      description: 'Learn the essentials of starting your own business!',
    },
    {
      id: 3,
      title: 'Networking Mixer',
      companyName: 'Networking Inc.',
      organizerName: 'Alex Johnson',
      location: 'City Lounge',
      date: '2024-04-15',
      time: '6:00 PM - 9:00 PM',
      contactNumber: '555-555-5555',
      email: 'alex@example.com',
      description: 'Connect with professionals and expand your network!',
    },
  ]);

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

  const handleApply = (eventId) => {
    // Handle apply logic for the event
    console.log(`Applied to event with ID: ${eventId}`);
  };

  return (
    <div className="events-container">
      <h2>Events</h2>
      <div className="filters">
        <label>
          Location:
          <select name="location" value={filters.location} onChange={handleFilterChange}>
            <option value="All">All</option>
            <option value="Convention Center">Convention Center</option>
            <option value="StartupHub Office">StartupHub Office</option>
            <option value="City Lounge">City Lounge</option>
          </select>
        </label>
        <label>
          Date:
          <select name="date" value={filters.date} onChange={handleFilterChange}>
            <option value="All">All</option>
            <option value="2024-03-20">2024-03-20</option>
            <option value="2024-04-05">2024-04-05</option>
            <option value="2024-04-15">2024-04-15</option>
          </select>
        </label>
        <label>
          Company Name:
          <select name="companyName" value={filters.companyName} onChange={handleFilterChange}>
            <option value="All">All</option>
            <option value="TechCorp">TechCorp</option>
            <option value="StartupHub">StartupHub</option>
            <option value="Networking Inc.">Networking Inc.</option>
          </select>
        </label>
        <label>
          Time:
          <select name="time" value={filters.time} onChange={handleFilterChange}>
            <option value="All">All</option>
            <option value="10:00 AM - 4:00 PM">10:00 AM - 4:00 PM</option>
            <option value="2:00 PM - 5:00 PM">2:00 PM - 5:00 PM</option>
            <option value="6:00 PM - 9:00 PM">6:00 PM - 9:00 PM</option>
          </select>
        </label>
        <label>
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
          .filter(event => (filters.location === 'All' || event.location === filters.location)
            && (filters.date === 'All' || event.date === filters.date)
            && (filters.companyName === 'All' || event.companyName === filters.companyName)
            && (filters.time === 'All' || event.time === filters.time)
            && (filters.searchTerm === '' || event.title.toLowerCase().includes(filters.searchTerm.toLowerCase())))
          .map(event => (
            <li key={event.id} className="event-item">
              <div className="event-details">
                <h3 className="event-title">{event.title}</h3>
                <p className="event-info">Company: {event.companyName}</p>
                <p className="event-info">Organizer: {event.organizerName}</p>
                <p className="event-info">Location: {event.location}</p>
                <p className="event-info">Date: {event.date}</p>
                <p className="event-info">Time: {event.time}</p>
                <p className="event-info">Contact Number: {event.contactNumber}</p>
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
