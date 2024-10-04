import React from "react";
import Navbar from "../components/Navbar";
import { NavbarSimple } from "../components/NavbarSimple";
import Hero from "../components/Hero";

const Index = () => {
  return (
    <div>
      <NavbarSimple />
      {/* Hero Section */}
      <Hero/>
      {/* Service Section */}
      <div>Service</div>
    </div>
  );
};

export default Index;
