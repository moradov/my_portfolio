import React from "react";
import ProgressBarItem from "./ProgressBareItem";
const ProgressBarList = () => {
  const skills = [
    { name: "HTML", percentage: "90" },
    { name: "css", percentage: "90" },
    { name: "Boostrap", percentage: "70" },
    { name: "Java Script", percentage: "70" },
    { name: "React", percentage: "70" },
    { name: "Vue", percentage: "40" },
    { name: "Express", percentage: "60" },
    { name: "MongoDB", percentage: "50" },
    { name: "Git & Github", percentage: "50" },
    { name: "UX/UI", percentage: "45" },
  ];
  return (
    <div className='progress-bar-sec'>
      {skills.map((skill) => (
        <ProgressBarItem key={skill.name} progressData={skill} />
      ))}
    </div>
  );
};

export default ProgressBarList;
