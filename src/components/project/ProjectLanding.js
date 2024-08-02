import React from "react";
import project from "../../assests/projectimg.png"
import bg from "../../assests/projectbg.png"

const ProjectLanding = () => {
    return (
        <div className="ProjectLanding">
            {/* <div className="head">
                <div className="heading-color">Portfolio</div>
                <div className="sm-head">
                    Check our recent works we delivered to our clients
                </div>
            </div> */}
            <div className="img-sec">
                <div className="text-section">
                    <div className="very-small">EdTech</div>
                    <div className="big-text">The AI-Powered Literacy App for Kids</div>
                    <div className="para">
                        Bibli's founders, former Teach for India educators, witnessed the
                        literacy gap firsthand. So, they set out to create a learning app
                        that could change the game.
                    </div>
                </div>
                <div className="sm-img">
                    <img src={project} alt="project" className="img-project" />
                </div>
            </div>
            <div><img src={bg} alt="bg" className="w-100" /></div>
        </div>
    );
};

export default ProjectLanding;
