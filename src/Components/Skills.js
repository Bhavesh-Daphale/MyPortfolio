import React from "react";

const languages = ["Java", "Python", "SQL", "HTML", "JavaScript", "C++"];

const technologiesFrameworks = ["CSS", "Bootstrap", "React.js", "Node.js", "Express.js", "EJS", "Git", "GitHub"];

const softSkills = ["Adaptability", "Creativity", "Problem solving", "Interpersonal skills", "Teamwork"];



const Skills = () => {
  return (
    <section className="skills-section container-fluid bg-dark text-white" id="skills-section">
      <h1 className="section-heading">Skills</h1>
      <SkillSets Heading = "Soft Skills" List = {softSkills}/>
      <SkillSets Heading = "Technologies and Frameworks" List = {technologiesFrameworks}/>
      <SkillSets Heading = "Languages" List = {languages}/>
      
      
    </section>
  );
};

const SkillSets = ({Heading , List}) => {

    return(
        <div className="soft-skills py-3">
        <h3 className="sub-heading">{Heading}</h3>
        <div className="skills-list">
            {List.map((item, index) => (
            <Skill key={index} Item={item} />
        ))}
        </div>
      </div>
        
        );
    };
    

const Skill = ({Item}) => {

return(
    <div className="px-4 py-2 m-2 rounded-pill bg-dark skill-pill text-nowrap">{Item}</div>
    );
};

export default Skills;
