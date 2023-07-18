import React from "react";

import image1 from "../Assets/personal-finance-manager.png";
import image2 from "../Assets/weather-app.png";
import image3 from "../Assets/traffic-hotspot-analysis.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faDatabase, faCloudSunRain, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faCss3Alt, faSquareJs, faBootstrap, faReact, faNodeJs, faPython } from "@fortawesome/free-brands-svg-icons";

const projectList = [
  {
    image: image1,
    name: "Personal Finance Manager",
    desc: "Developed a robust personal finance manager app empowering users to effortlessly track and optimize their financial activities for improved wealth.",
    techIcons: [
      { icon: faCode, color: "#EF632B" },
      { icon: faCss3Alt, color: "#2866E2" },
      { icon: faSquareJs, color: "#EFDA4D" },
      { icon: faBootstrap, color: "#8511F8" },
      { icon: faReact, color: "#00D6FF" },
      { icon: faNodeJs, color: "#4E9A43" },
      { icon: faDatabase, color: "#005F89" }
    ]
  },
  {
    image: image2,
    name: "Weather App",
    desc: "Designed and implemented a user-friendly Weather App showcasing real-time weather conditions and accurate forecasts through seamless integration with a weather API.",
    techIcons: [
      { icon: faCode, color: "#EF632B" },
      { icon: faCss3Alt, color: "#2866E2" },
      { icon: faSquareJs, color: "#EFDA4D" },
      { icon: faNodeJs, color: "#4E9A43" },
      { icon: faCloudSunRain, color: "#EB6E4B" }
    ]
  },
  {
    image: image3,
    name: "Traffic Hotspot Analysis",
    desc: 
    "Created a Python-based traffic hotspot analysis project utilizing genetic algorithms to optimize and identify traffic hotspots and improve urban mobility.",
    techIcons: [
      { icon: faPython, color: "#356F9F" },
      { icon: faLocationDot, color: "#F81721" }

    ]
  }
];

const Projects = () => {
  return (
    <section className="projects-section container-fluid p-4 text-white" id="projects-section">
      <h1 className="section-heading">Projects</h1>
      <div className="projects-content row g-4 py-3">
        {projectList.map((item, index) => (
          <Project key={index} project={item} />
        ))}
      </div>
    </section>
  );
};

const Project = ({ project }) => {
  return (
    <div className="col-lg-4 col-m-4">
      <div className="card bg-dark rounded-3">
        <img src={project.image} className="card-img-top rounded-3 mx-auto my-3" style={{ width: "95%", height: "95%" }} alt="..." />
        <div className="card-body text-white">
          <h5 className="card-title" style={{ color: "var(--medium)" }}>{project.name}</h5>
          <p className="card-text">{project.desc}</p>
          <div className="row g-2">
            {project.techIcons.map((item, index) => (
              <TechIcons key={index} Icon={item.icon} color={item.color} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const TechIcons = ({ Icon, color }) => {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ width: "3rem" }}>
      <div className="tech-icons p-1 rounded-2 ratio ratio-1x1 d-flex justify-content-center align-items-center">
        <FontAwesomeIcon className="p-2 rounded-2" icon={Icon} style={{ backgroundColor: "var(--dark)", color: color, width: "60%", height: "60%" }} />
      </div>
    </div>
  );
};

export default Projects;


