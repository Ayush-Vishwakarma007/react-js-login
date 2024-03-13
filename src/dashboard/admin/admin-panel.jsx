import React from 'react';
import Chart from 'react-apexcharts';
import './admin-panel.css'; // Import CSS file for styling
import { FaEdit, FaTrashAlt, FaPlus } from 'react-icons/fa'; 

const AdminPanel = () => {
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

  const chartOptions = {
    chart: {
      type: 'bar',
      height: 350,
      toolbar: {
        show: false,
      },
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
    xaxis: {
      categories: users.map((user) => user.name),
    },
    yaxis: {
      title: {
        text: 'Events',
      },
    },
  };

  const chartSeries = [
    {
      name: 'Events',
      data: users.map((user) => user.events),
    },
  ];

  const lineChartOptions = {
    chart: {
      height: 350,
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    },
    colors: ["#FF1654", "#247BA0"],
  };

  const lineChartSeries = [
    {
      name: 'Volunteer',
      data: [30, 40, 35, 50, 45],
    },
    {
      name: 'Company',
      data: [25, 50, 40, 35, 20],
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
            series={chartSeries}
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
