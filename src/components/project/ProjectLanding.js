import React from "react";
import { useParams } from "react-router-dom";

// Example project data (in a real-world scenario, this would come from a database or API)
const projectData = {
    1: {
        title: "The AI-Powered Literacy App for Kids",
        description: "Bibli's founders, former Teach for India educators, witnessed the literacy gap firsthand.",
        creator: "Teach for India",
        category: "EdTech",
    },
    2: {
        title: "E-Commerce Platform",
        description: "A robust platform for small businesses.",
        creator: "XYZ Corp",
        category: "E-Commerce",
    },
};

const ProjectLanding = () => {
    const { projectId } = useParams();
    const project = projectData[projectId]; 

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div className="ProjectLanding">
            <div className="img-sec">
                <div className="text-section">
                    <div className="very-small">{project.category}</div>
                    <div className="big-text">{project.title}</div>
                    <div className="para">{project.description}</div>
                    <div className="creator">Created by: {project.creator}</div>
                </div>
               
            </div>
        </div>
    );
};

export default ProjectLanding;
