import React from "react";
import Skill from "./Skill";

const TechType = ({ type, techs }) => {
  return (
    <div className="container grid grid-cols-4 gap-4 ">
      <div className="flex bg-primary-skill col-span-1 justify-center items-center text-pf-dp text-2xl rounded-xl text-f-secondary mb-4 text-center w-full">
        <p className="align-middle m-2 p-2 text-2xl">{type}</p>
      </div>
      <div className="col-span-3 grid grid-cols-5 justify-items-center mb-4 mr-4 w-full">
        {techs.map((name) => (
          <Skill key={name} name={name} />
        ))}
      </div>
    </div>
  );
};

export default TechType;
