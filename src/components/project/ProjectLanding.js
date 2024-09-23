import React from "react";
import { useParams } from "react-router-dom";
import glimpse1 from "../../assests/hezky.png"
import glimpse2 from "../../assests/jedlo.png"
import glimpse3 from "../../assests/kotak.png"
import glimpse4 from "../../assests/locume.png"

// Example project data (in a real-world scenario, this would come from a database or API)
const projectsData = [
    {
        title: "Food Delivery Platform for JedloApp",
        name: "JedloApp",
        url: "https://jedloapp.in",
        description: "A robust food delivery application providing users with a wide selection of restaurants and cuisines. The platform ensures smooth navigation and easy ordering, coupled with secure payment integration.",
        image: glimpse1, // replace with actual image path if available
      },
      {
        title: "Insurance Platform for Zurich Kotak",
        name: "Zurich Kotak",
        url: "https://www.zurichkotak.com",
        description: "A sophisticated insurance management system tailored to provide users with financial security solutions. The platform integrates seamless navigation and offers various insurance packages.",
        image: glimpse3, // replace with actual image path if available
      },
      {
        title: "Agricultural Solutions for Agro Orbit",
        name: "Agro Orbit",
        url: "https://agroorbit.com",
        description: "An agricultural platform offering solutions to improve crop yields and farm management. Agro Orbit leverages data analytics and IoT to provide farmers with real-time insights.",
        image: glimpse2, // replace with actual image path if available
      },
      {
        title: "Dental Health Platform for VC Orthodontics",
        name: "VC Orthodontics",
        url: "https://vcorthodontics.com",
        description: "A comprehensive platform offering orthodontic solutions with seamless online appointment scheduling and patient management tools.",
        image: "https://vcorthodontics.com/assets/slide2-bee2285d.jpeg", // replace with actual image path if available
      },
      {
        title: "Mobile Game Platform for Shibnobi Play",
        name: "Shibnobi Play",
        url: "https://play.google.com/store/apps/details?id=com.prox.fundacles",
        description: "A mobile gaming platform offering players an exciting and immersive experience across various genres. Features smooth gameplay and social engagement.",
        image: "https://img.etimg.com/thumb/width-420,height-315,imgsize-678018,resizemode-75,msid-79280279/markets/stocks/news/bitcoins-gunning-for-a-record-and-no-ones-talking-about-it/bitcoin.jpg", // replace with actual image path if available
      },
      {
        title: "Health & Wellness App for ICICI Lombard",
        name: "ICICI Lombard Ozone Plus",
        url: "https://play.google.com/store/apps/details?id=com.icicilombard.ozoneplus&hl=en",
        description: "A health and wellness app designed to track fitness, offer health advice, and provide insurance-based wellness programs.",
        image: "https://media.licdn.com/dms/image/C4E22AQFWpyXDSXTGAw/feedshare-shrink_800/0/1631768907615?e=2147483647&v=beta&t=Glqb3ec9oVp3DYtP75QmM8-v03aqPlZ5b-UPJLyJmxU", // replace with actual image path if available
      },
      {
        title: "Survey & Feedback App for ICICI",
        name: "ICICI Survey App",
        url: "https://play.google.com/store/apps/details?id=com.icici.surveyapp_revamp&hl=en",
        description: "An internal survey tool designed for collecting feedback, managing customer surveys, and ensuring high-quality service standards for ICICI.",
        image: "https://motorbash.com/wp-content/uploads/2016/11/ICICI-Mobile-Self-Inspection-Insure-App-1280x720.jpg", // replace with actual image path if available
      },{
        title: "Healthcare Staffing Solutions for Locum",
        name: "Locum",
        url: "https://locume.netlify.app", // replace with actual URL if available
        description: "A healthcare staffing platform that connects medical professionals with temporary positions in hospitals and clinics. The platform simplifies job matching and streamlines the hiring process.",
        image: glimpse4, // replace with actual image path if available
      },
      {
        title: "Creative Media Platform for Fisheye Hub",
        name: "Fisheye Hub",
        url: "https://apps.apple.com/in/app/fisheye-hub/id1286294135",
        description: "A creative media platform offering design and multimedia services to clients, focusing on innovation and customer satisfaction.",
        image: "https://via.placeholder.com/150", // replace with actual image path if available
      },
      {
        title: "Gaming Platform for Shibnobi Play",
        name: "Shibnobi Play",
        url: "https://play.google.com/store/apps/details?id=com.prox.fundacles",
        description: "A dynamic mobile gaming platform offering a wide range of interactive games, ensuring a smooth and engaging experience for players.",
        image: "https://via.placeholder.com/150", // replace with actual image path if available
      },
     {
        title: "Digital Publishing Solutions for Vakils Pre Media",
        name: "Vakils Pre Media",
        url: "https://www.vakilspremedia.com",
        description: "A digital publishing platform providing end-to-end solutions for printing and media needs, including pre-press, design, and publishing services.",
        image: "https://via.placeholder.com/150", // replace with actual image path if available
      },{
        title: "Media Broadcasting Platform for Tu Voz Now",
        name: "Tu Voz Now",
        url: "https://www.tuvoznow.com",
        description: "An innovative media platform designed for broadcasting news, opinions, and entertainment. The platform allows users to voice their thoughts and connect with a wider audience.",
        image: "https://via.placeholder.com/150", // replace with actual image path if available
      },{
        title: "Mobile News App for Tu Voz Now",
        name: "Tu Voz Now - App",
        url: "https://play.google.com/store/apps/details?id=com.zokoo.tuvoznow&hl=en_IN&gl=US",
        description: "A mobile app allowing users to stay updated with the latest news and opinions. Users can share their views and contribute to discussions within the platform.",
        image: "https://via.placeholder.com/150", // replace with actual image path if available
      },{
        title: "Innovative Solutions for Hezky Tech",
        name: "Hezky Tech",
        url: "https://hezkytech.com", // replace with actual URL if available
        description: "A technology solutions company offering innovative software and hardware products across multiple industries. Hezky Tech focuses on delivering user-friendly interfaces and cutting-edge technologies.",
        image: "https://via.placeholder.com/150", // replace with actual image path if available
      }
];

const ProjectLanding = () => {
    const { projectId } = useParams();
    const project = projectsData[projectId]; 

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div className="ProjectLanding">
            <div className="img-sec">
                <div className="text-section">
                    <div className="very-small">{project?.name}</div>
                    <div className="big-text">{project?.title}</div>
                    <div className="para">{project?.description}</div>
                    <div className="creator">Created by: {project?.creator}</div>
                </div>
               
            </div>
        </div>
    );
};

export default ProjectLanding;
