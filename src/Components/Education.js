import React from "react";

const Info = [
  {
    name: "Prime Academy ICSE, Mumbai",
    year: "2008 - 2018",
    para: "Passed 10th ICSE with a score of 90.80%",
    para2: "Computer Application - 95%"
  },
  {
    name: "Nirmala Memorial Foundation Jr. College",
    year: "2018 - 2020",
    para: "Passed 12th HSC with a score of 82%",
    para2: "Computer Science - 188/200"
  },
  {
    name: "Thadomal Shahani Engineering College, Mumbai",
    year: "2020 - 2024 Expected",
    para: "Currently pursuing Bachelors Degree in Computer Engineering with an average score of 9.1 CGPA"
  }
];

const Education = () => {
  return (
    <section className="education-section container-fluid bg-dark text-white" id="education-section">
      <h1 className="section-heading">Education</h1>
      <ul className="timeline">
        {Info.map((item, index) => (
          <EduItem key={index} Info={item} />
        ))}
      </ul>
    </section>
  );
};

const EduItem = ({ Info }) => {
  return (
    <li className="timeline-item mb-5">
      <h5 className="fw-bold">{Info.name}</h5>
      <p className="mb-2 fw-bold">{Info.year}</p>
      <p className="">{Info.para}<br />{Info.para2}</p>
    </li>
  );
};

export default Education;
