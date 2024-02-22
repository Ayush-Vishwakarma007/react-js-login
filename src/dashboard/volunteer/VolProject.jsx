import React, { useState } from 'react';
import './Project.css'; // Import the CSS file for styling

function Project() {
  // Sample data for projects
  const [projects, setProjects] = useState([
    { id: 1, title: 'Project 1', submissionDate: '2024-02-10', progress: 100, category: 'approved' },
    { id: 2, title: 'Project 2', submissionDate: '2024-02-15', progress: 60, category: 'approved' },
    { id: 3, title: 'Project 3', submissionDate: '2024-02-20', progress: 100, category: 'approved' },
    { id: 4, title: 'Project 4', submissionDate: '2024-02-25', progress: 20, category: 'approved' },
    { id: 5, title: 'Project 5', submissionDate: '2024-03-01', progress: 90, category: 'under_review' },
    { id: 6, title: 'Project 6', submissionDate: '2024-05-06', progress: 50, category: 'under_review' },
    { id: 7, title: 'Project 7', submissionDate: '2024-03-05', progress: 30, category: 'draft' },
    { id: 8, title: 'Project 8', submissionDate: '2024-10-05', progress: 40, category: 'draft' },
  ]);

  // State to manage active tab
  const [activeTab, setActiveTab] = useState('approved');

  return (
    <div className="project-panel">
      <div className="tabs">
        <button className={activeTab === 'approved' ? 'active' : ''} onClick={() => setActiveTab('approved')}>Approved</button>
        <button className={activeTab === 'under_review' ? 'active' : ''} onClick={() => setActiveTab('under_review')}>Under Review</button>
        <button className={activeTab === 'draft' ? 'active' : ''} onClick={() => setActiveTab('draft')}>Draft</button>
      </div>
      <div className="projects">
        {projects
          .filter(project => project.category === activeTab)
          .map((project, index) => (
            <div className="project" key={project.id}>
              <h2>{project.title}</h2>
              <p>Submission Date: {project.submissionDate}</p>
              <div className="progress-bar-container">
                <div className="progress-bar" style={{ width: `${project.progress}%` }}></div>
              </div>
              {activeTab === 'approved' && project.progress === 100 && (
                <button className="payment-button">Payment Status</button>
              )}
              {activeTab === 'approved' && project.progress === 100 && (
                <button className="feedback-button">Feedback</button>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}

export default Project;
