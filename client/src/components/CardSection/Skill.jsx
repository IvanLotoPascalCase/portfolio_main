import React from "react";
// LENGUAJES PROGRAMACION
import { IoLogoJavascript } from "react-icons/io";
import { FaPython } from "react-icons/fa";
import { SiCsharp } from "react-icons/si";
// LENGUAJES DE ETIQUETA
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
// FRAMEWORKS
import { FaReact } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
// BASES DE DATOS
import { SiMysql } from "react-icons/si";
import { DiPostgresql } from "react-icons/di";
import { SiMongodb } from "react-icons/si";
import { GrOracle } from "react-icons/gr";
import { SiMicrosoftsqlserver } from "react-icons/si";
//BACKEND
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
// import { SiAxios } from "react-icons/si";
// //FRONTEND
import { SiMaterialui } from "react-icons/si";
import {} from "react-icons/si";
// import { SiReactquery } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiReactrouter } from "react-icons/si";
// MISC
import { SiAdobeillustrator } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { SiAdobexd } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaGit } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { FaBitbucket } from "react-icons/fa";

const Skill = ({ name, level }) => {
  const objIcons = {
    js: ["JavaScript", <IoLogoJavascript />],
    python: ["Python", <FaPython />],
    csharp: ["C#", <SiCsharp />],
    html: ["HTML5", <FaHtml5 />],
    css: ["CSS3", <FaCss3 />],
    react: ["ReactJS", <FaReact />],
    angular: ["Angular", <FaAngular />],
    django: ["Django REST", <SiDjango />],
    mysql: ["MySQL", <SiMysql />],
    postgresql: ["PostgreSQL", <DiPostgresql />],
    mongodb: ["MongoDB", <SiMongodb />],
    oracle: ["Oracle", <GrOracle />],
    mssqlserver: ["Ms SQL Server", <SiMicrosoftsqlserver />],
    nodejs: ["NodeJS", <FaNodeJs />],
    express: ["express", <SiExpress />],
    tailwind: ["TailwindCSS", <SiTailwindcss />],
    mui: ["Material UI", <SiMaterialui />],
    reactrouter: ["React Router", <SiReactrouter />],
    ai: ["Adobe Illustrator", <SiAdobeillustrator />],
    figma: ["Figma", <FaFigma />],
    xd: ["Adobe Xd", <SiAdobexd />],
    postman: ["Postman", <SiPostman />],
    git: ["Git", <FaGit />],
    github: ["GitHub", <FaGithub />],
    bitbucket: ["BitBucket", <FaBitbucket />],
    docker: ["Docker", <FaDocker />],
  };
  return (
    <div className="flex w-[20vh] h-full p-4 bg-primary rounded-xl items-center">
      <span className="text-4xl">{objIcons[name][1]}</span>
      <p className="px-2 py-1 text-xl">{objIcons[name][0]}</p>
    </div>
  );
};

export default Skill;
