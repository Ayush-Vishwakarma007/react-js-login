import React, { useState, useEffect } from 'react';
import BASE_URL from '../../configuration';
import toastr from "toastr";
import './myApplications.css'; // Import the CSS file for styling

function MyApplications() {
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

//   const handleApply = async (eventId) => {
//     try {
//       const userId = JSON.parse(localStorage.getItem('userDetail')).id
//       const data = {
//         userId: JSON.stringify(userId)
//       }
//       const str_eventId = JSON.stringify(eventId)
//       const response = await fetch(`${BASE_URL}event/${str_eventId}/appliedBy`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify(data)
//       });
//       const responseData = await response.json();
//       if (responseData['status']['code'] === 200) {
//         toastr.success(responseData['status']['description']);
//       } else {
//         toastr.error(responseData['status']['description']);
//       }
//       const new_event_id = {
//         id:userId
//       }
//       const response_event_id = await fetch(`${BASE_URL}auth/users/${eventId}`,{
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify(new_event_id)
//       })
//       const new_respnse = await response_event_id.json();
//       console.log("new response__", new_respnse)
      
//     }catch (error){
//       console.error("Something went wrong", error);
//     }
//   };

  useEffect(() => {
    const userId = JSON.parse(localStorage.getItem('userDetail')).applied_event
    async function fetchEvents() {
      try {
        const userId = JSON.parse(localStorage.getItem('userDetail')).id
        const latest_user = await fetch(`${BASE_URL}auth/getUser/${userId}`)
        const latest_user_data = await latest_user.json();
        const applied_events = latest_user_data['data']['applied_event']
        const request_data = {
            ids: applied_events
        }
        const response = await fetch(`${BASE_URL}event/getByIds`,{
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify(request_data)
        });
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
      <h2>My Applied Events/Jobs</h2>
      {/* Filter and search components */}
      <ul className="events-list">
        {/* Render events dynamically */}
        {events
          .filter(event => (filters.location === 'All' || event.location === filters.location)
            && (filters.date === 'All' || event.date === filters.date)
            && (filters.companyName === 'All' || event.companyName === filters.companyName)
            && (filters.time === 'All' || event.time === filters.time)
            && (filters.searchTerm === '' || event.title.toLowerCase().includes(filters.searchTerm.toLowerCase())))
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
                <div className="status-container">
                    <h5>Status: </h5>
                    <button className="status">In process</button>
                </div>
            </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default MyApplications;
