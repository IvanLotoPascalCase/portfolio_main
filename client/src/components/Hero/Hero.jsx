import React from "react";
import "../../styling/header.css";
import CTA from "../CTA";
import mainPhoto from "../../assets/main1.jpg";

const Hero = () => {
  return (
    <div className="grid grid-row-2 grid-flow-col h-[90vh] items-center">
      {/* SECCION 1 HERO (INFO) */}
      <div className="py-[15vh] ">
        <div className="container header__container">
          <h3 className="text-4xl text-neutral-500">Hi, my name is</h3>
          <div>
            <h1 className="text-8xl text-neutral-600">Iván Alexis Olivares</h1>
          </div>
          <div className="py-4">
            <h1 className="text-white text-4xl">Front-End Developer</h1>
          </div>
          <CTA />
        </div>
      </div>
      {/* SECCION 2 HERO (FOTO) */}
      {/* <div className="md:col-span-4 flex items-center justify-center p-20 ">
        <img src={mainPhoto} alt="me" className="w-[80%]" />
      </div> */}
      <div className="box-blob flex rounded-2xl">
        {/* <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#FF0066"
            d="M39.3,-65.9C51.3,-61,61.9,-51.4,68.2,-39.7C74.4,-27.9,76.4,-13.9,73.7,-1.5C71.1,10.9,63.9,21.8,58.3,34.7C52.7,47.6,48.7,62.6,39.3,70.7C29.8,78.8,14.9,80.1,2.6,75.6C-9.7,71.1,-19.4,60.7,-30.7,53.7C-42.1,46.7,-55,43,-60.1,34.6C-65.2,26.1,-62.4,13.1,-65.5,-1.8C-68.6,-16.6,-77.5,-33.3,-72.5,-41.8C-67.5,-50.4,-48.6,-50.9,-34.2,-54.5C-19.8,-58,-9.9,-64.7,1.8,-67.9C13.6,-71.1,27.2,-70.9,39.3,-65.9Z"
            transform="translate(100 100)"
          />
        </svg> */}
        <img src={mainPhoto} alt="me" className="w-[30%]" />
      </div>
    </div>
  );
};

export default Hero;
