import React from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import smartboy from "../../assests/smartborderboy.png"
import smartboyother from "../../assests/smartboy2.png"
import smartgirl from "../../assests/smartgirl.png"


const SnapShot = () => {

    const allDevelopers = [
        { name: "Raghav S", role: "SE Developer", img: smartboy, techStack: ["React", "Node.js"] },
        { name: "Pooja R", role: "Frontend Developer", img: smartgirl, techStack: ["HTML", "CSS", "JavaScript"] },
        { name: "Ankit M", role: "Backend Developer", img: smartboyother, techStack: ["PostgreSQL", "MongoDB"] },
        { name: "Sneha K", role: "Fullstack Developer", img: smartgirl, techStack: ["React", "Express"] },
        { name: "Vikram J", role: "DevOps Engineer", img: smartboy, techStack: ["AWS", "Docker"] },
        { name: "Neha L", role: "Data Scientist", img: smartgirl, techStack: ["Python", "TensorFlow"] },
        { name: "Ravi D", role: "Mobile App Developer", img: smartboyother, techStack: ["Flutter", "Firebase"] },
        { name: "Kriti P", role: "UI/UX Designer", img: smartgirl, techStack: ["Figma", "Adobe XD"] }
      ];

      const shuffleArray = (array) => {
        return array.sort(() => Math.random() - 0.5);
      };
      
      const randomDevelopers = shuffleArray(allDevelopers).slice(0, 3);
      const allTechStacks = randomDevelopers.flatMap(dev => dev.techStack);

    return (
       <div className="SnapShot">
  <div className="head">Project Snapshot</div>
 
  <div className="in-head">Team Members</div>
  <div className="details">
    <div className=" sm-card-main">

      {randomDevelopers.map((dev, index) => (
        <div  key={index} className="d-flex ">
          
        <div className="sm-card">
          <div className="sm-svg">
            <img src={dev.img} alt={dev.name} className="AccountCircleIcon" />
          </div>
          <div>
            <div className="name">{dev.name}</div>
            <div className="des">{dev.role}</div>
            <div className="tech-stack">
              {dev.techStack.join(", ")}
            </div>
          </div>
        </div>    
       
        </div>   
     ))}
    </div>
        <div className="result">
                    <div className="in-head">The results</div>
                    <div className="other-card">
                        <div className="box">
                            <div className="nmu">01</div>
                            <div className="num-text">Released</div>
                        </div>
                        <div className="box">
                            <div className="nmu">04</div>
                            <div className="num-text">Months to Build</div>
                        </div><div className="box">
                            <div className="nmu">60</div>
                            <div className="num-text">Months Contract</div>
                        </div>
                    </div>
                    <div className="small-other-card" > 

{allTechStacks.map((tech, techIndex) => (
         
        <div className="small-box-recatngle">    {tech}
         </div>
        ))}   </div>
                      
                  
                   
                </div>
       

    </div>
    
  </div>


    );
};

export default SnapShot;
