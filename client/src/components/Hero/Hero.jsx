import React from "react";
import "../../styling/header.css";
import CTA from "../CTA";
import mainPhoto from "../../assets/article1.jpg";

const Hero = () => {
  return (
    <div className="grid grid-row-2 grid-flow-col">
      {/* SECCION 1 HERO (INFO) */}
      <div className="py-[15vh] ">
        <div className="container header__container">
          <h3 className="text-3xl text-neutral-500">Hi, my name is</h3>
          <div>
            <h1 className="text-8xl text-neutral-600">Iván Alexis Olivares</h1>
          </div>
          <div className="py-1">
            <h1 className="text-white text-4xl">Front-End Developer</h1>
          </div>
          <CTA />
        </div>
      </div>
      {/* SECCION 2 HERO (FOTO) */}
      {/* <div className="md:col-span-4 flex items-center justify-center p-20 ">
        <img src={mainPhoto} alt="me" className="w-[80%]" />
      </div> */}
    </div>
  );
};

export default Hero;
