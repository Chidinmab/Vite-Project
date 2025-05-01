import React from "react";
import HeroSection from "../component/HeroSection";
import Navbar from "../component/Navbar";
import StaffCard from "../component/StaffCard";
import CaseStudy from "../component/CaseStudy";
import WhyGetResponse from "../component/WhyGetResponse";


const Homepage = () => {
  return (
    <div>
    <Navbar/>
      <HeroSection/>
      <div className="flex">
      <StaffCard name='John Frank' Position='HR Manager' Department='Human Resources'
       image='https://randomuser.me/api/portraits/men/32.jpg' />
      <StaffCard name='Karen Kev ' Position='IT Manager' Department='Information Technology' 
      image='https://randomuser.me/api/portraits/women/44.jpg'/>
      <StaffCard name='Dino Dean' Position='Finance Manager' Department='Finance' 
      image='https://randomuser.me/api/portraits/men/22.jpg' />
      </div>
      <WhyGetResponse/>

      <CaseStudy/>
    </div>
  );
};
export default Homepage;