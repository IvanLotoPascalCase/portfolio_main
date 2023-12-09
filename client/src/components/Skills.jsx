import "../styling/blurryfilter.css";
import Skill from "./CardSection/Skill";
import TechType from "./CardSection/TechType";
import Divider from "./Reuse/Divider";

const Skills = () => {
  return (
    <section className="bg-primary-skill blur-background-filter bg-opacity-50 pb-10 mt-10">
      <div className="flex justify-center">
        <div className="flex w-[35vh] h-full m-4 justify-center items-center text-pf-dp text-6xl rounded-xl p-2 text-f-secondary">
          <h2 className="m-2">Stack</h2>
        </div>
      </div>
      <Divider />
      <TechType
        type="Programming Languages"
        techs={["js", "python", "csharp"]}
      />
      <TechType type="Frameworks" techs={["react", "angular", "django"]} />
      <TechType
        type="Databases"
        techs={["postgresql", "mongodb", "oracle", "mssqlserver", "mysql"]}
      />
      <TechType type="Frontend" techs={["tailwind", "reactrouter", "mui"]} />
      <TechType type="Backend" techs={["nodejs", "express"]} />
      <TechType
        type="Tools"
        techs={["postman", "git", "github", "bitbucket", "docker"]}
      />
      <TechType type="Web Structure" techs={["html", "css"]} />
      <TechType type="Miscellaneous" techs={["ai", "figma", "xd"]} />
    </section>
  );
};

export default Skills;
