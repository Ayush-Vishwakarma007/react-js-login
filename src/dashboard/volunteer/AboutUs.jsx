import React from 'react';
import './AboutUs.css'; // Import the CSS file for styling

function AboutUs() {
  return (
    <div className="about-us">
      <div className="content">
        <h2>About Us</h2>
        <p>We are a passionate team dedicated to making a positive impact in our community through volunteering. Our mission is to connect volunteers with meaningful opportunities to serve and contribute to the well-being of others.</p>
        <p>At our core, we believe that every individual has the power to make a difference, and by coming together as a community, we can create lasting change.</p>
        <h2>Our Vision</h2>
        <p>Our vision is to create a world where every person is inspired and empowered to volunteer their time and talents to make a difference in the lives of others.</p>
        <h2>Our Values</h2>
        <ul>
          <li>Compassion: We believe in showing empathy and kindness to all individuals.</li>
          <li>Collaboration: We work together with local organizations and community members to address needs effectively.</li>
          <li>Empowerment: We empower volunteers to utilize their skills and talents for the greater good.</li>
          <li>Inclusivity: We welcome individuals from diverse backgrounds and perspectives.</li>
        </ul>
        <h2>Our Achievements</h2>
        <ul>
          <li>Established in 2010, we have grown our volunteer network to over 1000 dedicated members.</li>
          <li>Organized numerous successful community events, including charity fundraisers, food drives, and environmental clean-up efforts.</li>
          <li>Partnered with local schools to provide mentorship programs and educational resources to underserved youth.</li>
          <li>Received recognition from the Mayor's Office for our outstanding contributions to community service.</li>
        </ul>
      </div>
      <div className="image">
        <img src="https://blogs.volunteermatch.org/hs-fs/hubfs/Cornershop%20Creative-VolunteerMatch-3%20Ways%20To%20Engage%20Volunteers%20On%20Your%20Nonprofit%20Website_feature.jpg?width=750&height=500&name=Cornershop%20Creative-VolunteerMatch-3%20Ways%20To%20Engage%20Volunteers%20On%20Your%20Nonprofit%20Website_feature.jpg" alt="Volunteers" /><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <img src="https://img.freepik.com/premium-photo/volunteer-park-portrait-people-with-phone-social-media-online-chat-charity-website-update-community-service-teamwork-happy-ngo-group-smartphone-outdoor-cleaning-litter_590464-235258.jpg" alt="Volunteers" />
      </div>
    </div>
  );
}

export default AboutUs;
