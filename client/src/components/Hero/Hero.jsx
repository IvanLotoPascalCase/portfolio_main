import React from "react";
import "../../styling/header.css";
import CTA from "../CTA";
import mainPhoto from "../../assets/main1.jpg";

const Hero = () => {
  return (
    <div className="grid grid-row-2 grid-flow-col h-[90vh] items-center justify-evenly">
      {/* SECCION 1 HERO (INFO) */}
      <div className="py-[5vh] mx-20 w-full flex-shrink-0">
        <div className="container header__container w-full ">
          <h3 className="text-4xl text-neutral-500">Hi, my name is</h3>
          <h1 className="text-8xl text-neutral-600">Iván Alexis Olivares</h1>
          <h1 className="text-4xl text-white py-4">Front-End Developer</h1>
          <CTA />
        </div>
      </div>
      <div className="box-blob relative h-[70vh] w-[80vh] flex-shrink-0">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="image"
              patternUnits="objectBoundingBox"
              width="100%"
              height="100%"
            >
              <image href={mainPhoto} width="200" height="200" x="-30" y="0" />
            </pattern>

            <pattern
              id="waves"
              width="100%"
              height="100%"
              patternUnits="userSpaceOnUse"
            >
              <rect width="200" height="200" fill="#42956A" />
            </pattern>
          </defs>

          <path
            fill="url(#image)"
            stroke="url(#waves)"
            strokeWidth="3"
            d="M37.7,-66.7C47.8,-59.5,54.2,-47.3,63.4,-35.3C72.6,-23.3,84.5,-11.7,87.8,1.9C91.1,15.4,85.7,30.9,75.7,41.4C65.6,51.9,51,57.4,37.6,64.9C24.2,72.5,12.1,82,-2.2,85.8C-16.5,89.7,-33.1,87.8,-43.1,78.3C-53.1,68.8,-56.5,51.7,-60.2,37.4C-63.9,23.1,-67.7,11.5,-67.8,-0.1C-68,-11.7,-64.4,-23.4,-59.6,-35.9C-54.9,-48.4,-49.1,-61.7,-39,-68.9C-28.9,-76.2,-14.4,-77.3,-0.3,-76.8C13.8,-76.2,27.6,-74,37.7,-66.7Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
