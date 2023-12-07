import React from "react";
import curriculum from "../assets/curriculum.pdf";
import resume from "../assets/resume.pdf";

const CTA = () => {
  return (
    <div className="grid grid-rows-1 grid-flow-col gap-1 py-2 w-20">
      <div className="px-1">
        <a
          href={resume}
          download
          className="btn btn-primary rounded-md text-xl"
        >
          Resumé (ENG)
        </a>
      </div>
      <div className="px-1">
        <a href={curriculum} download className="btn rounded-md text-xl">
          Curriculum Vitae (ESP)
        </a>
      </div>
    </div>
  );
};

export default CTA;
