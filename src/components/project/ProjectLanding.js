import React from "react";
import { useParams } from "react-router-dom";
import glimpse1 from "../../assests/hezky.png"
import glimpse2 from "../../assests/jedlo.png"
import glimpse3 from "../../assests/kotak.png"
import glimpse4 from "../../assests/locume.png"
import glimpse5 from "../../assests/agro.png"
import glimpse6 from "../../assests/vakil.png"


const projectsData = {
 1: {
      title: "Food Delivery Platform for JedloApp",
      name: "JedloApp",
      url: "https://jedloapp.in",
      description: "A robust food delivery application providing users with a wide selection of restaurants and cuisines. The platform ensures smooth navigation and easy ordering, coupled with secure payment integration.",
      image: glimpse2, // replace with actual image path if available
    },
   2: {
      title: "Insurance Platform for Zurich Kotak",
      name: "Zurich Kotak",
      url: "https://www.zurichkotak.com",
      description: "A sophisticated insurance management system tailored to provide users with financial security solutions. The platform integrates seamless navigation and offers various insurance packages.",
      image: glimpse3, // replace with actual image path if available
    },
   3: {
      title: "Agricultural Solutions for Agro Orbit",
      name: "Agro Orbit",
      url: "https://agroorbit.com",
      description: "An agricultural platform offering solutions to improve crop yields and farm management. Agro Orbit leverages data analytics and IoT to provide farmers with real-time insights.",
      image: glimpse5, // replace with actual image path if available
    },4:{
      title: "Innovative Solutions for Hezky Tech",
      name: "Hezky Tech",
      url: "https://hezkytech.com", // replace with actual URL if available
      description: "A technology solutions company offering innovative software and hardware products across multiple industries. Hezky Tech focuses on delivering user-friendly interfaces and cutting-edge technologies.",
      image: glimpse1, // replace with actual image path if available
    },
    5:{
      title: "Dental Health Platform for VC Orthodontics",
      name: "VC Orthodontics",
      url: "https://vcorthodontics.com",
      description: "A comprehensive platform offering orthodontic solutions with seamless online appointment scheduling and patient management tools.",
      image: "https://vcorthodontics.com/assets/slide2-bee2285d.jpeg", // replace with actual image path if available
    },
    6:{
      title: "Mobile Game Platform for Shibnobi Play",
      name: "Shibnobi Play",
      url: "https://play.google.com/store/apps/details?id=com.prox.fundacles",
      description: "A mobile gaming platform offering players an exciting and immersive experience across various genres. Features smooth gameplay and social engagement.",
      image: "https://img.etimg.com/thumb/width-420,height-315,imgsize-678018,resizemode-75,msid-79280279/markets/stocks/news/bitcoins-gunning-for-a-record-and-no-ones-talking-about-it/bitcoin.jpg", // replace with actual image path if available
    },
    7:{
      title: "Health & Wellness App for ICICI Lombard",
      name: "ICICI Lombard Ozone Plus",
      url: "https://play.google.com/store/apps/details?id=com.icicilombard.ozoneplus&hl=en",
      description: "A health and wellness app designed to track fitness, offer health advice, and provide insurance-based wellness programs.",
      image: "https://media.licdn.com/dms/image/C4E22AQFWpyXDSXTGAw/feedshare-shrink_800/0/1631768907615?e=2147483647&v=beta&t=Glqb3ec9oVp3DYtP75QmM8-v03aqPlZ5b-UPJLyJmxU", // replace with actual image path if available
    },
    8:{
      title: "Survey & Feedback App for ICICI",
      name: "ICICI Survey App",
      url: "https://play.google.com/store/apps/details?id=com.icici.surveyapp_revamp&hl=en",
      description: "An internal survey tool designed for collecting feedback, managing customer surveys, and ensuring high-quality service standards for ICICI.",
      image: "https://motorbash.com/wp-content/uploads/2016/11/ICICI-Mobile-Self-Inspection-Insure-App-1280x720.jpg", // replace with actual image path if available
    },9:{
      title: "Healthcare Staffing Solutions for Locum",
      name: "Locum",
      url: "https://locume.netlify.app", // replace with actual URL if available
      description: "A healthcare staffing platform that connects medical professionals with temporary positions in hospitals and clinics. The platform simplifies job matching and streamlines the hiring process.",
      image: glimpse4, // replace with actual image path if available
    },
    10:{
      title: "Creative Media Platform for Fisheye Hub",
      name: "Fisheye Hub",
      url: "https://apps.apple.com/in/app/fisheye-hub/id1286294135",
      description: "A creative media platform offering design and multimedia services to clients, focusing on innovation and customer satisfaction.",
      image: "https://cdn.leadingedgeonly.com/innovation/fisheye-hub/hvM18HaymJo3sEt7jw0WbuLiMaGyTyxjyvqLykmv-card.jpg", // replace with actual image path if available
    },
   11:{
      title: "Digital Publishing Solutions for Vakils Pre Media",
      name: "Vakils Pre Media",
      url: "https://www.vakilspremedia.com",
      description: "A digital publishing platform providing end-to-end solutions for printing and media needs, including pre-press, design, and publishing services.",
      image: glimpse6, // replace with actual image path if available
    },12:{
      title: "Media Broadcasting Platform for Tu Voz Now",
      name: "Tu Voz Now",
      url: "https://www.tuvoznow.com",
      description: "An innovative media platform designed for broadcasting news, opinions, and entertainment. The platform allows users to voice their thoughts and connect with a wider audience.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfTzEVIXxBy6Zg91t5xs2k8prEyYNtz4Tw1g&s", // replace with actual image path if available
    },13:{
      title: "Medical Testing Solutions for Vital Lab",
      name: "Vital Lab",
      url: "https://vitallab.com",
      description: "A healthcare company specializing in medical testing and laboratory services. Vital Lab offers accurate diagnostic services with state-of-the-art testing technologies.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJCsBiKoe8FNx31qubRoEHgDd_rJhJHIxQOg&s", // replace with actual image path if available
    },14:{
      title: "Crowdfunding Platform for Fundacle",
      name: "Fundacle",
      url: "https://fundacle.com", // replace with actual URL if available
      description: "An online crowdfunding platform that helps startups, charities, and projects raise funds from a wide audience. Fundacle simplifies campaign management and supporter engagement.",
      image: "https://media.licdn.com/dms/image/D5612AQGp153sAUjJJQ/article-cover_image-shrink_720_1280/0/1722293330036?e=2147483647&v=beta&t=ft-pM4pp6Tc-HRrHGOQ5ZR2AqGOI4_0zn_R03_2pGxg", // replace with actual image path if available
    },15:{
      title: "Smart Vehicle Assistance for Otto Buddy",
      name: "Otto Buddy",
      url: "https://ottobuddy.com", // replace with actual URL if available
      description: "A smart vehicle assistant application offering real-time traffic updates, vehicle diagnostics, and driving assistance. Otto Buddy aims to improve driving experiences with advanced safety features.",
      image: "https://play-lh.googleusercontent.com/qd6aXrYgb1MkzKqsSU9054DhvfbENNi8t8oET5U2m6mZbHMKi2mnR9CXHYq3-NslLJm5", // replace with actual image path if available
    },16:{
      title: "Patient Management System for Mrecord Patient",
      name: "Mrecord Patient",
      url: "https://mrecordpatient.com", // replace with actual URL if available
      description: "A comprehensive patient management platform designed for healthcare providers. Mrecord Patient enables easy record keeping, appointment scheduling, and patient history tracking.",
      image: "https://cdn.prod.website-files.com/64abb91e69c1429ab62638be/64ba7cfb4b0c2ac2a47329aa_Blog-18---How-to-maintain-Patient-Record_.svg", // replace with actual image path if available
    }
  };


const ProjectLanding = () => {
    const { id } = useParams();
    const project = projectsData[id]; 

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
                    {/* <div className="creator">Created by: {project?.creator}</div> */}
                </div>
           
                <div className="pro-img"><img src={ project?.image } alt="img" /> </div>
                
            </div>
        </div>
    );
};

export default ProjectLanding;
