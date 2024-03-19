import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import './admin-panel.css'; // Import CSS file for styling
import { FaEdit, FaTrashAlt, FaPlus } from 'react-icons/fa'; 
import BASE_URL from '../../configuration';

const AdminPanel = () => {
  const [chartSeriesData, setChartSeriesData] = useState([]);

  const users = [
    { id: 1, name: 'User 1', email: 'user1@example.com', role: 'Admin', events: 10 },
    { id: 2, name: 'User 2', email: 'user2@example.com', role: 'User', events: 5 },
    { id: 3, name: 'User 3', email: 'user3@example.com', role: 'User', events: 8 },
    { id: 4, name: 'User 4', email: 'user4@example.com', role: 'User', events: 9 },
    { id: 5, name: 'User 5', email: 'user5@example.com', role: 'User', events: 7 },
    { id: 6, name: 'User 6', email: 'user6@example.com', role: 'User', events: 6 },
    { id: 7, name: 'User 7', email: 'user7@example.com', role: 'User', events: 4 },
  ];

  const handleEdit = (id) => {
    // Handle edit logic here
    console.log('Edit user with ID:', id);
  };

  const handleDelete = (id) => {
    // Handle delete logic here
    console.log('Delete user with ID:', id);
  };

  const handleAdd = (id) => {
    console.log("Add with id: ", id)
  }

  const currentDate = new Date();
  const currentYear = 2023;
  const currentMonth = currentDate.getMonth() + 1; 

  const months = [];
  for (let month = 0; month < 12; month++) {
    const monthDate = new Date(currentYear, month, 24);
    const monthLabel = monthDate.toLocaleString('en-US', { month: 'short' });
    months.push(`${currentYear}-${monthLabel}`);
  }

useEffect(() => {
  async function fetchVolunteers() {
    try {
      const response = await fetch(`${BASE_URL}auth/bar-chart-data`);
      if (!response.ok) {
        throw new Error('Failed to fetch volunteers');
      }
      const data = await response.json();
      console.log("Data__: ", data)
      setChartSeriesData(data['data']);
    } catch (error) {
      console.error('Error fetching volunteers:', error);
    }
  }
  fetchVolunteers();
}, []);

  const chartOptions = {
    chart: {
      type: 'bar',
      height: 350,
      toolbar: {
        show: false,
      },
      stacked: true,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded',
      },
    },
    dataLabels: {
      enabled: false,
    },
    title: {
      text: 'Active Volunteers & Company'
    },
    xaxis: {
      categories: months,
    },
    yaxis: {
      title: {
        text: 'No of Volunteers & Companies',
      },
    },
  };

  // const chartSeries = [
  //   {
  //     name: 'Active Company',
  //     data: [44, 55, 41]
  //   }, 
  //   {
  //     name: 'Active Volunteer',
  //     data: [53, 32, 33]
  //   }
  // ]

  const lineChartOptions = {
    chart: {
      height: 350,
      toolbar: {
        show: false,
      },
    },
    title: {
      text: 'Registeration of Volunteers & Company'
    },
    xaxis: {
      categories: months,
    },
    colors: ["#FF1654", "#247BA0", "#38c25e"],
  };

  const lineChartSeries = [
    {
      name: 'Volunteer',
      data: [30, 40, 35],
    },
    {
      name: 'Company',
      data: [25, 50, 40],
    },
    {
      name: 'Events',
      data: [20, 25, 30],
    },
  ];

  return (
    <div className="admin-panel">
      <header className="header">
        <h1>Admin Panel</h1>
      </header>
      <div className="charts">
        {/* Bar chart component */}
        <div className="chart">
          <Chart
            options={chartOptions}
            series={chartSeriesData}
            type="bar"
            height={350}
          />
        </div>
        {/* Line chart component */}
        <div className="chart">
          <Chart
            options={lineChartOptions}
            series={lineChartSeries}
            type="line"
            height={350}
          />
        </div>
      </div>
      <div className="user-list">
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <div className="user-box">
                <p style={{fontWeight: '600'}}><strong style={{fontWeight: 'bold'}}>Name:</strong> {user.name}</p>
                <p style={{fontWeight: '600'}}><strong style={{fontWeight: 'bold'}}>Email:</strong> {user.email}</p>
                <p style={{fontWeight: '600'}}><strong style={{fontWeight: 'bold'}}>Role:</strong> {user.role}</p>
                <p style={{fontWeight: '600'}}><strong style={{fontWeight: 'bold'}}>Events:</strong> {user.events}</p>
                <div className="button-container">
                  <FaEdit onClick={() => handleEdit(user.id)} style={{ cursor: 'pointer', color: '#fcb438', marginRight: '15px' }} />
                <FaTrashAlt onClick={() => handleDelete(user.id)} style={{ cursor: 'pointer', color: '#FF1654', marginRight: '15px' }} />
                <FaPlus onClick={() => handleAdd(user.id)} style={{ cursor: 'pointer', color: '#008080' }} />
                </div>
              </div>
            </li>
          ))}
        </ul>
        <ul>
        {users.map((user) => (
            <li key={user.id}>
            <div className="user-box-company">
                <p style={{fontWeight: '600'}}><strong style={{fontWeight: 'bold'}}>Name:</strong> {user.name}</p>
                <p style={{fontWeight: '600'}}><strong style={{fontWeight: 'bold'}}>Email:</strong> {user.email}</p>
                <p style={{fontWeight: '600'}}><strong style={{fontWeight: 'bold'}}>Role:</strong> {user.role}</p>
                <p style={{fontWeight: '600'}}><strong style={{fontWeight: 'bold'}}>Events:</strong> {user.events}</p>
                <div className="button-container">
                <FaEdit onClick={() => handleEdit(user.id)} style={{ cursor: 'pointer', color: '#fcb438', marginRight: '15px' }} />
                <FaTrashAlt onClick={() => handleDelete(user.id)} style={{ cursor: 'pointer', color: '#FF1654', marginRight: '15px' }} />
                <FaPlus onClick={() => handleAdd(user.id)} style={{ cursor: 'pointer', color: '#008080' }} />
                </div>
            </div>
            </li>
        ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminPanel;
