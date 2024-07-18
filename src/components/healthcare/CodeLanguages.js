import React from "react";
import CheckIcon from '@mui/icons-material/Check';
import react from "../../assests/react.png"
import python from "../../assests/python.png"
import Angular from "../../assests/Angular.png"
import fullstack from "../../assests/fullstack.png"
import Salesforce from "../../assests/sales.png"
import ai from "../../assests/ai.png"
import sap from "../../assests/sap.png"
import java from "../../assests/java.png"
import node from "../../assests/node.png"
import andriod from "../../assests/andriod.png"
import blockchain from "../../assests/blockchain.png"
import flutter from "../../assests/flutter.png"
import devops from "../../assests/deveops.png"
import wordpress from "../../assests/wordpress.png"
import cloud from "../../assests/cloud.png"
import php from "../../assests/php.png"

const CodeLanguages = () => {

    const skills = [
        { name: 'React.js', imgSrc: react },
        { name: 'Python', imgSrc: python },
        { name: 'Angular', imgSrc: Angular },
        { name: 'Full stack', imgSrc: fullstack },
        { name: 'Salesforce', imgSrc: Salesforce },
        { name: 'AI', imgSrc: ai },
        { name: 'SAP', imgSrc: sap },
        { name: 'Java', imgSrc: java },
        { name: 'Node.js', imgSrc: node },
        { name: 'Andriod', imgSrc: andriod },
        { name: 'Blockchain', imgSrc: blockchain },
        { name: 'Php', imgSrc: php },
        { name: 'Flutter', imgSrc: flutter },
        { name: 'Devops', imgSrc: devops },
        { name: 'WordPress', imgSrc: wordpress },
        { name: 'Cloud', imgSrc: cloud },
    ];

    return (
        <div className="CodeLanguages">
            <div className="box">
                <div className="head">Find the Right Expert</div>
                <div className="d-flex align-items-center check-data" style={{ gap: "23.8px" }}>
                    <div className="d-flex">
                        <div className="check"><CheckIcon className="CheckIcon" /></div>
                        <div className="text">350+ Large Comp. Partnered</div>
                    </div> <div className="d-flex">
                        <div className="check"><CheckIcon className="CheckIcon" /></div>
                        <div className="text">Hired 7000+ Developers</div>
                    </div> <div className="d-flex">
                        <div className="check"><CheckIcon className="CheckIcon" /></div>
                        <div className="text">On-site, Remote, Hybrid</div>
                    </div>
                </div>
                <div className="skills-container">
                    {skills.map((skill, index) => (
                        <div key={index} className="skill-card">
                            <img src={skill.imgSrc} alt={skill.name} className="skill-icon" />
                            <div className="name">{skill.name}</div>
                        </div>
                    ))}
                </div>
                <div className="d-flex" style={{ gap: "29px" }}>
                    <button className="call">Schedule a call</button>
                    <button className="expert">Talk to our experts?</button>
                </div>
            </div>
        </div>
    );
};

export default CodeLanguages;
