import React from "react";
import videobg from "../Assets/spacebackground.mp4";
import UfoImage from "../Assets/home-ufo-image.png";


const Home = () => {

    return(
        <section className="home-section container-fluid p-0" id="home-section" >
            <video className="" src={videobg} autoPlay muted loop/>
            <div className="home-content" >
                {/* <Navbar /> */}
                
                <div className="home-image col-sm-12 col-xs-12 py-5">
                <img className="" src={UfoImage} alt="" ></img>
                </div>
                <div className="home-text col-sm-12 col-xs-12" >
                    <h1 className="">
                        <span className="text first-text">Hello There! I am </span>
                        <span className="text sec-text">Bhavesh Daphale</span>
                    </h1>
                    <p className="px-2 ">Welcome to my digital playground, where creativity meets technology</p>
                </div>
                
            </div>

        </section>

    );
};


export default Home;
