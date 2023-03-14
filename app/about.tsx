import Image from "next/image";
import aboutPana from "../public/aboutPana.jpg"
import Navbar from "./navbar";
import React from "react";


const About = () => {
  return (
    <>
      <div className="w-3/4 m-auto">
        <Navbar/>
        <Image src={aboutPana} alt={""}></Image>
        
      </div>
    </>
  );
};

export default About;