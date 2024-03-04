import React, { useState } from 'react';
import PaymentPopup from './payment_popup';
import './Project.css'; // Import the CSS file for styling

function Project() {
  // Sample data for projects
  const [projects, setProjects] = useState([
    { id: 1, title: 'Project 1', submissionDate: '2024-02-10', progress: 100, category: 'approved', volunteer: { name: 'John Doe', description: 'Lorem ipsum dolor sit amet.', contactNumber: '123-456-7890', email: 'john@example.com' } },
    { id: 2, title: 'Project 2', submissionDate: '2024-02-15', progress: 60, category: 'approved', volunteer: { name: 'Jane Smith', description: 'Consectetur adipiscing elit.', contactNumber: '987-654-3210', email: 'jane@example.com' } },
    { id: 3, title: 'Project 3', submissionDate: '2024-02-20', progress: 100, category: 'approved', volunteer: { name: 'Michael Johnson', description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', contactNumber: '555-123-4567', email: 'michael@example.com' } },
    { id: 4, title: 'Project 4', submissionDate: '2024-02-25', progress: 20, category: 'approved', volunteer: { name: 'Emily Brown', description: 'Ut enim ad minim veniam.', contactNumber: '111-222-3333', email: 'emily@example.com' } },
    { id: 5, title: 'Project 5', submissionDate: '2024-03-01', progress: 90, category: 'under_review', volunteer: { name: 'David Wilson', description: 'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', contactNumber: '999-888-7777', email: 'david@example.com' } },
    { id: 6, title: 'Project 6', submissionDate: '2024-05-06', progress: 50, category: 'under_review', volunteer: { name: 'Olivia Martinez', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', contactNumber: '444-555-6666', email: 'olivia@example.com' } },
    { id: 7, title: 'Project 7', submissionDate: '2024-03-05', progress: 30, category: 'draft', volunteer: { name: 'William Anderson', description: 'Excepteur sint occaecat cupidatat non proident.', contactNumber: '777-666-5555', email: 'william@example.com' } },
    { id: 8, title: 'Project 8', submissionDate: '2024-10-05', progress: 40, category: 'draft', volunteer: { name: 'Sophia Garcia', description: 'Sunt in culpa qui officia deserunt mollit anim id est laborum.', contactNumber: '222-333-4444', email: 'sophia@example.com' } },
  ]);

  // State to manage active tab
  const [activeTab, setActiveTab] = useState('approved');
  const [showPaymentPopup, setShowPaymentPopup] = useState(false); // State to control payment popup visibility

  const handlePaymentClick = () => {
    setShowPaymentPopup(true); // Show payment popup when payment button is clicked
    console.log("payment button clicked ", showPaymentPopup)
  };

  return (
    <div className="project-panel">
      <div className="tabs">
        {/* Your tab buttons... */}
      </div>
      <div className="projects">
        {projects
          .filter(project => project.category === activeTab)
          .map((project, index) => (
            <div className="project" key={project.id}>
              <h2>{project.title}</h2>
              <p>Submission Date: {project.submissionDate}</p>
              <p>Volunteer Name: {project.volunteer.name}</p>
              <p>Description: {project.volunteer.description}</p>
              <p>Contact Number: {project.volunteer.contactNumber}</p>
              <p>Email: {project.volunteer.email}</p>
              <div className="progress-bar-container">
                <div className="progress-bar" style={{ width: `${project.progress}%` }}></div>
              </div>
              {/* Render payment button */}
              {activeTab === 'approved' && project.progress === 100 && (
                <button className="payment-button" onClick={handlePaymentClick}>Payment</button>
              )}
            </div>
          ))}
      </div>
      {/* Render PaymentPopup component if showPaymentPopup is true */}
      {showPaymentPopup && <PaymentPopup onClose={() => setShowPaymentPopup(false)} />}
    </div>
  );
}

export default Project;
