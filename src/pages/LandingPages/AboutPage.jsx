import React from 'react';
import '../../styles/About.css';
import twiceGroupPhoto from '../../assets/twice-group.jpg'; 

function AboutPage() {
  return (
    <div className="about">
      <section className="about-header">
        <img src={twiceGroupPhoto} alt="Twice Group" className="about-image" />
        <div className="about-header-text">
          <h1>About Twice News & Updates</h1>
          <p>Bringing you the latest news, updates, and events about the global K-pop sensation, TWICE!</p>
        </div>
      </section>
      
      <section className="about-website">
        <h2>About This Website</h2>
        <p>
          <strong>Twice News & Updates</strong> is your go-to source for everything TWICE! Our mission is to provide fans with:
        </p>
        <ul>
          <li>Breaking news and updates about TWICE's activities.</li>
          <li>Tour and concert announcements.</li>
          <li>Exclusive interviews, behind-the-scenes content, and fan events.</li>
          <li>TWICE’s latest releases, music videos, and achievements.</li>
        </ul>
        <p>
          Whether you're a long-time ONCE or a new fan, we strive to keep you updated on TWICE’s journey as they continue to make history in the music industry.
        </p>
      </section>

    </div>
  );
}

export default AboutPage;
