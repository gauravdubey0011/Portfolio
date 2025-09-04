import "./HeroImgStyles.css";
import React from 'react';
import IntroImg from "../assets/profile.jpg"; // replace with correct image path

const HeroImg = () => {
  return (
    <div className="hero-section">
      <div className="hero-left">
        <p>Hello I'm <span className="wave">👋</span> <span className="name">Gaurav</span></p>
        <h1>A Developer</h1>
        <p className="bio">
          I'm a Developer and an engineering graduate, currently looking for opportunity. I'm learning to build user-friendly and efficient web applications...
          {/* Add the rest of the paragraph if needed */}
        </p>
        <div className="btn-group">
          <a href="project" className="btn">Project</a>
          <a href="contact" className="btn btn-light">Contact</a>
        </div>
      </div>
      <div className="hero-right">
        <img src={IntroImg} alt="Gaurav" className="profile-img" />
      </div>
    </div>
  );
};

export default HeroImg;
