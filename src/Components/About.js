import React from "react";
import MyImage from "../Assets/my-photo-new.png";

const About = () => {
//   const [aboutContent, setAboutContent] = useState("");

//   useEffect(() => {
//     // Fetch the content from aboutme.txt using fetch API
//     fetch("/aboutme.txt")
//       .then((response) => response.text())
//       .then((data) => setAboutContent(data))
//       .catch((error) => console.error("Error fetching aboutme.txt:", error));
//   }, []);

const aboutContent = "Passionate and driven computer engineering student with a focus on full-stack web development using the MERN stack. Skilled in creating robust and user-friendly web applications, I possess a strong foundation in front-end technologies such as HTML, CSS, and JavaScript, along with expertise in React.js for building dynamic and responsive user interfaces. With a keen eye for detail and a solid understanding of back-end development, I excel in server-side programming using Node.js and Express.js crafting efficient APIs and integrating data seamlessly into web applications. My proficiency extends to MySQL databases, where I am adept at designing, optimizing, and maintaining complex data structures."

  return (
    <section className="about-section container-fluid row p-3 box-area m-0" id="about-section">
      <div className="about-image col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column">
        <img src={MyImage} alt="contactmeimage" className="img-fluid" style={{ width: "80%" }} />
      </div>
      <div className="col-md-6 right-box p-lg-4 p-sm-2 mt-4">
        <div className="row align-items-center">
          <div className="about-text mb-4">
            <h2 className="section-heading text-white">About Me</h2>
            <h3 className="text-white">Full Stack Developer</h3>
            <p className="text-white pt-2">{aboutContent}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;









// import React from "react";
// import MyImage from "../Assets/my-photo-new.png"


// const About = () => {

//     return(
//         <section className="about-section container-fluid" id="about-section" >
            
//                 <div className="about-image  py-5">
//                         <img src={MyImage} alt="" />
//                 </div>
//                 <div className="about-text " >
//                     <h1 className="section-heading">About Me</h1>
//                     <h3>Full Stack Developer</h3>
//                         <p>
//                             iahsc qHEFOH  WRG QPWO WQ OLRGJ WRG OOWRGJETH   elor reh
//                             jneth  ekhtn eleht k erhtnnd,b s oiwethiol elthknb;lkn  thlk  th  etoijbho th  troih 
//                             iahsc qHEFOH  WRG QPWO WQ OLRGJ WRG OOWRGJETH   elor reh jneth  ekhtn eleht k erhtnnd,
//                             b s oiwethiol elthknb;lkn  thlk  th  etoijbho th  troih wdonv qfopqe qegqoneb qegnqpeg
//                             iahsc qHEFOH  WRG QPWO WQ OLRGJ WRG OOWRGJETH   elor reh
//                             jneth  ekhtn eleht k erhtnnd,b s oiwethiol elthknb;lkn  thlk  th  etoijbho th  troih 
//                             iahsc qHEFOH  WRG QPWO WQ OLRGJ WRG OOWRGJETH   elor reh jneth  ekhtn eleht k erhtnnd,
//                             b s oiwethiol elthknb;lkn  thlk  th  etoijbho th  troih wdonv qfopqe qegqoneb qegnqpeg
//                             iahsc qHEFOH  WRG QPWO WQ OLRGJ WRG OOWRGJETH   elor reh
//                             jneth  ekhtn eleht k erhtnnd,b s oiwethiol elthknb;lkn  thlk  th  etoijbho th  troih 
//                             iahsc qHEFOH  WRG QPWO WQ OLRGJ WRG OOWRGJETH   elor reh jneth  ekhtn eleht k erhtnnd,
//                             b s oiwethiol elthknb;lkn  thlk  th  etoijbho th  troih wdonv qfopqe qegqoneb qegnqpeg
//                             iahsc qHEFOH  WRG QPWO WQ OLRGJ WRG OOWRGJETH   elor reh
//                             jneth  ekhtn eleht k erhtnnd,b s oiwethiol elthknb;lkn  thlk  th  etoijbho th  troih 
//                             iahsc qHEFOH  WRG QPWO WQ OLRGJ WRG OOWRGJETH   elor reh jneth  ekhtn eleht k erhtnnd,
//                             b s oiwethiol elthknb;lkn  thlk  th  etoijbho th  troih wdonv qfopqe qegqoneb qegnqpeg
//                         </p>
//                 </div>

//         </section>

//     );
// };


// export default About;
