import React from "react";
import curriculum from "../assets/curriculum.pdf";

const CTA = () => {
  return (
    <div className="grid grid-rows-1 grid-flow-col gap-1 py-6 w-20">
      <div className="px-1">
        <a href="#contact" className="btn btn-primary">
          Resumé
        </a>
      </div>
      <div className="px-1">
        <a href={curriculum} download className="btn">
          Spanish Version
        </a>
      </div>
    </div>
  );
};

export default CTA;
