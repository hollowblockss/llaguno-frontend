import React from 'react';
import '../../styles/Home.css';
import heroImage from '../../assets/twice-hero.jpg';


function HomePage() {
  return (
    <div className="home">
      <section className="hero">
        <img src={heroImage} alt="Twice Hero" className="hero-image" />
        <div className="hero-text">
          <h1>Welcome to Twice News & Updates!</h1>
          <p>Your #1 source for the latest news, events, and updates about Twice!</p>
          <a href="/latest-news" className="cta-button">Read Latest News</a>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
