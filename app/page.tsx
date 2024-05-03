"use client";
import React from "react";
import About from "./mainhome/About";
import HeroSection from "./mainhome/HeroSection";
import Skills from "./mainhome/Skills";

function Home() {
  return (
    <div className="max-w-7xl mx-auto p-5">
      <HeroSection />
      <div className=" py-10">
        <Skills />
        <About />
      </div>
    </div>
  );
}

export default Home;
