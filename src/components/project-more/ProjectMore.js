import React, { useState, useRef } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import glimpse1 from "../../assests/hezky.png"
import glimpse2 from "../../assests/jedlo.png"
import glimpse3 from "../../assests/kotak.png"
import glimpse4 from "../../assests/locume.png"
import glimpse5 from "../../assests/agro.png"
import glimpse6 from "../../assests/vakil.png"
import glimpse7 from "../../assests/robo.png"
import glimpse8 from "../../assests/cyber.png"
import glimpse9 from "../../assests/bring.png"
import yuj from "../../assests/yuj.png"
import hdb from "../../assests/hdb.png"
import data from "../../assests/data.png"
import { Link } from "react-router-dom";

const ProjectMore = () => {
    const projectsData = [
        
          {  id:1,
            title: "Insurance Platform for Zurich Kotak",
            name: "Zurich Kotak",
            url: "https://www.zurichkotak.com",
            description: "A sophisticated insurance management system tailored to provide users with financial security solutions. The platform integrates seamless navigation and offers various insurance packages.",
            image: glimpse3, // replace with actual image path if available
          },
          {  id:2,
            title: "Agricultural Solutions for Agro Orbit",
            name: "Agro Orbit",
            url: "https://agroorbit.com",
            description: "An agricultural platform offering solutions to improve crop yields and farm management. Agro Orbit leverages data analytics and IoT to provide farmers with real-time insights.",
            image: glimpse5, // replace with actual image path if available
          },{  id:3,
            title: "Innovative Solutions for Hezky Tech",
            name: "Hezky Tech",
            url: "https://hezkytech.com", // replace with actual URL if available
            description: "A technology solutions company offering innovative software and hardware products across multiple industries. Hezky Tech focuses on delivering user-friendly interfaces and cutting-edge technologies.",
            image: glimpse1, // replace with actual image path if available
          },{  id:4,
            title: "Healthcare Staffing Solutions for Locum",
            name: "Locum",
            url: "https://locume.netlify.app", // replace with actual URL if available
            description: "A healthcare staffing platform that connects medical professionals with temporary positions in hospitals and clinics. The platform simplifies job matching and streamlines the hiring process.",
            image: glimpse4, // replace with actual image path if available
          },{  id:5,
            title: "Smart Vehicle Assistance for Otto Buddy",
            name: "Otto Buddy",
            url: "https://ottobuddy.com", // replace with actual URL if available
            description: "A smart vehicle assistant application offering real-time traffic updates, vehicle diagnostics, and driving assistance. Otto Buddy aims to improve driving experiences with advanced safety features.",
            image: "https://play-lh.googleusercontent.com/qd6aXrYgb1MkzKqsSU9054DhvfbENNi8t8oET5U2m6mZbHMKi2mnR9CXHYq3-NslLJm5", // replace with actual image path if available
          },{
            id:6,
            title: "Food Delivery Platform for JedloApp",
            name: "JedloApp",
            url: "https://jedloapp.in",
            description: "A robust food delivery application providing users with a wide selection of restaurants and cuisines. The platform ensures smooth navigation and easy ordering, coupled with secure payment integration.",
            image: glimpse2, // replace with actual image path if available
          },
          {  id:7,
            title: "Dental Health Platform for VC Orthodontics",
            name: "VC Orthodontics",
            url: "https://vcorthodontics.com",
            description: "A comprehensive platform offering orthodontic solutions with seamless online appointment scheduling and patient management tools.",
            image: "https://vcorthodontics.com/assets/slide2-bee2285d.jpeg", // replace with actual image path if available
          },
          {  id:8,
            title: "Mobile Game Platform for Shibnobi Play",
            name: "Shibnobi Play",
            url: "https://play.google.com/store/apps/details?id=com.prox.fundacles",
            description: "A mobile gaming platform offering players an exciting and immersive experience across various genres. Features smooth gameplay and social engagement.",
            image: "https://img.etimg.com/thumb/width-420,height-315,imgsize-678018,resizemode-75,msid-79280279/markets/stocks/news/bitcoins-gunning-for-a-record-and-no-ones-talking-about-it/bitcoin.jpg", // replace with actual image path if available
          },{ id:9,
            title: "Cybersecurity Solutions for Cyberquess",
            name: "Cyberquess",
            url: "https://cyberquess.com",
            description: "A leading provider of cybersecurity services and solutions, Cyberquess specializes in safeguarding businesses against digital threats with advanced security tools, monitoring, and response strategies.",
            image: glimpse8, // replace with actual image path if available
          },{id:10,
            title: "Online Car Auction Platform for Bring a Trailer",
            name: "Gas Guzzler",
            url: "https://bringatrailer.com",
            description: "A premier online car auction platform for classic, vintage, and collector vehicles. Bring a Trailer allows users to browse, bid, and buy rare automobiles, offering a curated selection of vehicles with detailed listings.",
            image: glimpse9, // replace with actual image path if available
          },
          {  id:11,
            title: "Health & Wellness App for ICICI Lombard",
            name: "ICICI Lombard Ozone Plus",
            url: "https://play.google.com/store/apps/details?id=com.icicilombard.ozoneplus&hl=en",
            description: "A health and wellness app designed to track fitness, offer health advice, and provide insurance-based wellness programs.",
            image: "https://media.licdn.com/dms/image/C4E22AQFWpyXDSXTGAw/feedshare-shrink_800/0/1631768907615?e=2147483647&v=beta&t=Glqb3ec9oVp3DYtP75QmM8-v03aqPlZ5b-UPJLyJmxU", // replace with actual image path if available
          },{id:12,
            title: "Automation Solutions for Roboquess",
            name: "Roboquess",
            url: "https://roboquess.com",
            description: "Roboquess specializes in delivering advanced robotics and automation solutions for industries. Their innovative technology optimizes production lines, improves efficiency, and reduces operational costs.",
            image: glimpse7, // replace with actual image path if available
          },
          {  id:13,
            title: "Survey & Feedback App for ICICI",
            name: "ICICI Survey App",
            url: "https://play.google.com/store/apps/details?id=com.icici.surveyapp_revamp&hl=en",
            description: "An internal survey tool designed for collecting feedback, managing customer surveys, and ensuring high-quality service standards for ICICI.",
            image: "https://motorbash.com/wp-content/uploads/2016/11/ICICI-Mobile-Self-Inspection-Insure-App-1280x720.jpg", // replace with actual image path if available
          },
          {  id:14,
            title: "Creative Media Platform for Fisheye Hub",
            name: "Fisheye Hub",
            url: "https://apps.apple.com/in/app/fisheye-hub/id1286294135",
            description: "A creative media platform offering design and multimedia services to clients, focusing on innovation and customer satisfaction.",
            image: "https://cdn.leadingedgeonly.com/innovation/fisheye-hub/hvM18HaymJo3sEt7jw0WbuLiMaGyTyxjyvqLykmv-card.jpg", // replace with actual image path if available
          },
         {  id:15,
            title: "Digital Publishing Solutions for Vakils Pre Media",
            name: "Vakils Pre Media",
            url: "https://www.vakilspremedia.com",
            description: "A digital publishing platform providing end-to-end solutions for printing and media needs, including pre-press, design, and publishing services.",
            image: glimpse6, // replace with actual image path if available
          },{  id:16,
            title: "Media Broadcasting Platform for Tu Voz Now",
            name: "Tu Voz Now",
            url: "https://www.tuvoznow.com",
            description: "An innovative media platform designed for broadcasting news, opinions, and entertainment. The platform allows users to voice their thoughts and connect with a wider audience.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfTzEVIXxBy6Zg91t5xs2k8prEyYNtz4Tw1g&s", // replace with actual image path if available
          },{  id:17,
            title: "Medical Testing Solutions for Vital Lab",
            name: "Vital Lab",
            url: "https://vitallab.com",
            description: "A healthcare company specializing in medical testing and laboratory services. Vital Lab offers accurate diagnostic services with state-of-the-art testing technologies.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJCsBiKoe8FNx31qubRoEHgDd_rJhJHIxQOg&s", // replace with actual image path if available
          },{  id:18,
            title: "Crowdfunding Platform for Fundacle",
            name: "Fundacle",
            url: "https://fundacle.com", // replace with actual URL if available
            description: "An online crowdfunding platform that helps startups, charities, and projects raise funds from a wide audience. Fundacle simplifies campaign management and supporter engagement.",
            image: "https://media.licdn.com/dms/image/D5612AQGp153sAUjJJQ/article-cover_image-shrink_720_1280/0/1722293330036?e=2147483647&v=beta&t=ft-pM4pp6Tc-HRrHGOQ5ZR2AqGOI4_0zn_R03_2pGxg", // replace with actual image path if available
          },{  id:20,
            title: "Patient Management System for Mrecord Patient",
            name: "Mrecord Patient",
            url: "https://mrecordpatient.com", // replace with actual URL if available
            description: "A comprehensive patient management platform designed for healthcare providers. Mrecord Patient enables easy record keeping, appointment scheduling, and patient history tracking.",
            image: "https://cdn.prod.website-files.com/64abb91e69c1429ab62638be/64ba7cfb4b0c2ac2a47329aa_Blog-18---How-to-maintain-Patient-Record_.svg", // replace with actual image path if available
          },
          {id:21,
            title: "Financial Solutions for HDB Financial Services",
            name: "HDB Financial Services",
            url: "https://hdbfs.com", // replace with actual URL if available
            description: "HDB Financial Services offers a wide range of financial products, including personal loans, business loans, and insurance solutions. HDBFS provides tailored financial assistance to help customers achieve their financial goals.",
            image: hdb, // replace with actual image path if available
          },{id:22,
            title: "Design and Innovation Consulting for YUJ",
            name: "YUJ",
            url: "https://yujdesigns.com/", // replace with actual URL if available
            description: "YUJ is a design and innovation consulting firm that helps businesses craft engaging experiences, product designs, and strategic insights. They focus on user-centric solutions to drive growth and innovation.",
            image: yuj, // replace with actual image path if available
          },{id:23,
            title: "Software Solutions for Datacomp",
            name: "Datacomp",
            url: "https://www.datacompwebtech.com/", // replace with actual URL if available
            description: "Datacomp provides cutting-edge software solutions for industries such as insurance, finance, and healthcare. Their platforms enhance operational efficiency, provide insights, and help businesses manage their data effectively.",
            image: data, // replace with actual image path if available
          }
    ];

    const [currentSet, setCurrentSet] = useState(1);
    const projectGridRef = useRef(null);

    const handleNext = () => {
        if (currentSet === 1) {
            setCurrentSet(2);
            projectGridRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handlePrevious = () => {
        if (currentSet === 2) {
            setCurrentSet(1);
            projectGridRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    const dataToShow =
        currentSet === 1 ? projectsData.slice(0, 8) : projectsData.slice(8);

    return (
        <div className="project-more" ref={projectGridRef}>
            <div className="head">
                <div className="heading-color">Portfolio</div>
                <div className="sm-head">
                    Check our recent works we delivered to our clients
                </div>
            </div>
            <div className="projects-grid" >
                {dataToShow.map((project, index) => (
                    <div key={project?.id} className="project-item">
                        <div className="pro-title">{project.title}</div>
                       
                        <div >
                            <img
                                src={project.image}
                                alt={project.name}
                                className="project-img"

                                onClick={() => window.location.href = `/project/${project.id}`} style={{cursor: "pointer"}}
                            />
                            <div className="url-container d-flex justify-content-between align-items-center">
                                <div>
                                    <div className="pro-name" onClick={() => window.location.href = `/project/${project.id}`} style={{cursor: "pointer"}} >{project.name}</div>
                                    <div className="pro-url"><a href={project.url} target="_blank" > {project.url} </a></div>
                                </div>
                                <div>
                                    <svg
                                        width="46"
                                        height="47"
                                        viewBox="0 0 46 47"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        onClick={() => window.location.href = `/project/${project.id}`} style={{cursor: "pointer"}}
                                    >
                                        <rect
                                            y="0.5"
                                            width="46"
                                            height="46"
                                            rx="6"
                                            fill="#FFF9F3"
                                        />
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M16.7856 29.7144C17.1663 30.0952 17.7837 30.0952 18.1644 29.7144L27.55 20.3289V27.725C27.55 28.2635 27.9865 28.7 28.525 28.7C29.0635 28.7 29.5 28.2635 29.5 27.725V17.975C29.5 17.4365 29.0635 17 28.525 17H18.775C18.2365 17 17.8 17.4365 17.8 17.975C17.8 18.5135 18.2365 18.95 18.775 18.95H26.1711L16.7856 28.3356C16.4048 28.7163 16.4048 29.3337 16.7856 29.7144Z"
                                            fill="url(#paint0_linear_908_1508)"
                                        />
                                        <defs>
                                            <linearGradient
                                                id="paint0_linear_908_1508"
                                                x1="23"
                                                y1="30"
                                                x2="23"
                                                y2="17"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stop-color="#FEBF24" />
                                                <stop offset="1" stop-color="#EA4232" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            </div>

                       
                        <div className="pro-des">{project.description}</div>
                    </div>
                ))}
            </div>
            <div className="pagination">
                <div
                    className="arrow-icon"
                    onClick={handlePrevious}
                    disabled={currentSet === 1}
                >
                    <ArrowBackIcon style={{ color: "rgba(254, 191, 36, 1)" }} />
                </div>
                <div
                    className="arrow-icon"
                    onClick={handleNext}
                    disabled={currentSet === 2}
                >
                    <ArrowForwardIcon style={{ color: "rgba(254, 191, 36, 1)" }} />
                </div>
            </div>
        </div>
    );
};

export default ProjectMore;
