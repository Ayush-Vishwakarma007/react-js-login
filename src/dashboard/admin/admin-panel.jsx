import React from 'react';
import Chart from 'react-apexcharts';
import './admin-panel.css'; // Import CSS file for styling

const AdminPanel = () => {
  const users = [
    { id: 1, name: 'User 1', email: 'user1@example.com', role: 'Admin', events: 10 },
    { id: 2, name: 'User 2', email: 'user2@example.com', role: 'User', events: 5 },
    { id: 3, name: 'User 3', email: 'user3@example.com', role: 'User', events: 8 },
  ];

  const handleEdit = (id) => {
    // Handle edit logic here
    console.log('Edit user with ID:', id);
  };

  const handleDelete = (id) => {
    // Handle delete logic here
    console.log('Delete user with ID:', id);
  };

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
  };

  const lineChartSeries = [
    {
      name: 'Line Chart',
      data: [30, 40, 35, 50, 45],
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
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Role:</strong> {user.role}</p>
                <p><strong>Events:</strong> {user.events}</p>
                <div className="button-container">
                  <button onClick={() => handleEdit(user.id)}>Edit</button>
                  <button onClick={() => handleDelete(user.id)}>Delete</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <div className="user-box">
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Role:</strong> {user.role}</p>
                <p><strong>Events:</strong> {user.events}</p>
                <div className="button-container">
                  <button onClick={() => handleEdit(user.id)}>Edit</button>
                  <button onClick={() => handleDelete(user.id)}>Delete</button>
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
