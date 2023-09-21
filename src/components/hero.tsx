import React from "react";
import "../Styles/Hero/hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero__container">
      <video
        className="hero__video"
        loop
        muted
        src="https://drive.google.com/uc?export=download&id=1c6_crfaGdn_bm8NO3bMZeA7nqRdJ7DdL"
        autoPlay
      />
      <div className="bg-cyan-700 absolute top-0 w-[100%] h-[100%] mix-blend-overlay"></div>
      <div className="hero__content">
        <div className="heroTextSection">
          <h1>What are you waiting for ?</h1>
          <h2>Take your much needed vacation now</h2>
          <button className="glass-button">
            <p>
              {" "}
              <Link to="under-construction">Join us</Link>
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
