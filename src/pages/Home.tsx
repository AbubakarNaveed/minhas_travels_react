import React from "react";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Resorts from "../components/resorts";
import Prices from "../components/prices";
import Reviews from "../components/Review";
import Footer from "../components/footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Resorts />
      <Prices />
      <Reviews />
      <Footer />
    </>
  );
};

export default Home;
