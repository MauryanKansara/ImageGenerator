import React from "react";
import Hero from "../components/Hero";
import Main from "../components/Main";

const LandingPage = () => {
  return (
    <main>
      <div className="main">
        <div className="gradient" />
      </div>
      <div className="app">
        <Hero />
        <Main />
      </div>
    </main>
  );
};

export default LandingPage;
