/* eslint-disable no-whitespace-before-property */
import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import './admin-panel.css'; // Import CSS file for styling
import { FaEdit, FaTrashAlt, FaPlus } from 'react-icons/fa'; 
import BASE_URL from '../../configuration';
import Modal from 'react-modal';
import toastr from 'toastr';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root')
const AdminPanel = () => {
  const [chartSeriesData, setChartSeriesData] = useState([]);
  const [lineChartSeriesData, setLineChartSeriesData] = useState([])
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6); // Number of items per page
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [selectedUser, setSelectedUser] = useState(null); 
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
    skills: [],
    phone: "",
    location: ""
  });

  let subtitle;

  function openModal(user) {
    setSelectedUser(user);
    setState({
      name: user.name,
      email: user.email,
      role: user.role,
      skills: user.skills || [], // Ensure skills array is not null
      phone: user.phone,
      location: user.location,
    });
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleDelete = async (userId) => {
    try {
      const deletedUser = await fetch(`${BASE_URL}auth/deleteUser/${userId}`, {
        method: 'DELETE',
      });
      const data = await deletedUser.json();
      if(data['status']['code'] === 200){
        toastr.success(data['status']['description'])
      }else{ toastr.error(data['status']['description'])}
      fetchUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const currentYear = 2023;

  const months = [];
  for (let month = 0; month < 12; month++) {
    const monthDate = new Date(currentYear, month, 24);
    const monthLabel = monthDate.toLocaleString('en-US', { month: 'short' });
    months.push(`${currentYear}-${monthLabel}`);
  }

  const fetchUsers = async () => {
    try {
      const response = await fetch(`${BASE_URL}auth/getAll`);
      const data = await response.json();
      setUsers(data['data']);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    async function fetchVolunteers() {
      try {
        const response = await fetch(`${BASE_URL}auth/bar-chart-data`);
        const lineChartResponse = await fetch(`${BASE_URL}auth/line-chart-data`)
        if (!response.ok) {
          throw new Error('Failed to fetch volunteers');
        }
        if(!lineChartResponse.ok){
          throw new Error('Falied to fetch Line chart data')
        }
        const line = await lineChartResponse.json()
        const data = await response.json();
        setLineChartSeriesData(line['data'])
        setChartSeriesData(data['data']);
        fetchUsers(); 
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
      text: 'Active & Inactive Volunteers & Company'
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

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = users.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(users.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch(`${BASE_URL}auth/updateUserById/${selectedUser.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          role: e.target.role.value,
          skills: e.target.skills?.value.split(',').map((skill) => skill.trim()), 
          phone: e.target.phone.value,
          location: e.target.location.value,
        }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to update user');
      }
      const data = await response.json();
      if(data['status']['code'] === 200){
        toastr.success(data['status']['description'])
      }else{
        toastr.error(data['status']['description'])
      }
      closeModal();
    } catch (error) {
      console.error('Error updating user:', error);
      throw error
      // Handle error (e.g., show error message to user)
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }; 

  return (
    <div className="admin-panel">
      {/* <button onClick={openModal}>Open Modal</button> */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>Edit User Details</h2>
        {state && (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={state.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              value={state.email}
              onChange={handleChange}
            />
            <input
              type="text"
              name="role"
              value={state.role}
              onChange={handleChange}
            />
            {state.role === 'VOLUNTEER' && (
              <input
                type="text"
                name="skills"
                value={state.skills.join(', ')}
                onChange={handleChange}
                placeholder="Skills (comma separated)"
              />
            )}
            <input
              type="text"
              name="phone"
              value={state.phone}
              onChange={handleChange}
            />
            <input
              type="text"
              name="location"
              value={state.location}
              onChange={handleChange}
            />

            <button type="submit">Update</button>
          </form>
        )}
      </Modal>
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
            series={lineChartSeriesData}
            type="line"
            height={350}
          />
        </div>
      </div>
        <div className="user-list">
            <ul className="user-list">
                {currentItems.map((user) => (
                  <li key={user.id} className="user-item">
                    <div className="user-box">
                      <div className="user-info">
                      <div className="button-container">
                        <FaEdit
                          onClick={() => openModal(user)}
                          style={{ cursor: 'pointer', color: '#fcb438', marginRight: '15px'}}
                        />
                        <FaTrashAlt
                          onClick={() => handleDelete(user.id)}
                          style={{ cursor: 'pointer', color: '#FF1654', marginRight: '15px' }}
                        />
                      </div>
                        <p style={{ fontWeight: 'bold', fontSize: '1.1em' }}>Name: <span style={{ fontWeight: 'normal', fontSize: '1em' }}>{user.name}</span></p>
                        <p style={{ fontWeight: 'bold', fontSize: '1.1em' }}>Email: <span style={{ fontWeight: 'normal', fontSize: '1em' }}>{user.email}</span></p>
                        <p style={{ fontWeight: 'bold', fontSize: '1.1em' }}>Role: <span style={{ fontWeight: 'normal', fontSize: '1em' }}>{user.email}</span></p>
                        <p style={{ fontWeight: 'bold', fontSize: '1.1em' }}>Phone: <span style={{ fontWeight: 'normal', fontSize: '1em' }}>{user.phone}</span></p>
                        <p style={{ fontWeight: 'bold', fontSize: '1.1em' }}>Location: <span style={{ fontWeight: 'normal', fontSize: '1em' }}>{user.location}</span></p>
                        <p style={{ fontWeight: 'bold', fontSize: '1.1em' }}>Skills: <span style={{ fontWeight: 'normal', fontSize: '1em' }}>{user.skills?.join(', ')}</span></p>
                      </div>
                    </div>
                  </li>
                ))}
          </ul>
          {/* <div className="pagination">
          <button onClick={handlePrevPage} disabled={currentPage === 1}>
            Previous
          </button>
          {Array.from(
            { length: Math.ceil(users.length / itemsPerPage) },
            (_, index) => {
              const page = index + 1;
              const leftBoundary = currentPage - 10;
              const rightBoundary = currentPage + 10;
              const totalPages = Math.ceil(users.length / itemsPerPage);

              if (totalPages <= 4) {
                return (
                  <button
                    key={index}
                    onClick={() => handlePageChange(page)}
                    className={currentPage === page ? 'active' : ''}
                  >
                    {page}
                  </button>
                );
              }

              if (page === 1 || page === totalPages || (page >= leftBoundary && page <= rightBoundary)) {
                return (
                  <button
                    key={index}
                    onClick={() => handlePageChange(page)}
                    className={currentPage === page ? 'active' : ''}
                  >
                    {page}
                  </button>
                );
              }

              return null;
            }
          )}
          <button onClick={handleNextPage} disabled={currentPage === Math.ceil(users.length / itemsPerPage)}>
            Next
          </button>
        </div> */}
        <div className="pagination">
          {Array.from(
            { length: Math.ceil(users.length / itemsPerPage) },
            (_, index) => {
              const page = index + 1;
              return (
                <button
                  key={index}
                  onClick={() => handlePageChange(page)}
                  className={currentPage === page ? 'active' : ''}
                >
                  {page}
                </button>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
