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
import glimpse9 from "../../assests/gas.png"
import poorva from "../../assests/poorva.png"
import della from "../../assests/della.png"
import fisheye from "../../assests/fisheye.png"
import fund from "../../assests/fund.png"
import otto from "../../assests/otto.png"
import ozone from "../../assests/ozone.png"
import tuvo from "../../assests/tuvo.png"
import nestpro from "../../assests/nestpro.png"
import vc from "../../assests/vc.png"
import flight from "../../assests/flight.png"
import ott from "../../assests/ott.png"
import tutor from "../../assests/tutor.png"
import vf from "../../assests/vf.png"
import fishey from "../../assests/fishey.png"
import selas from "../../assests/seales.png"
import avant from "../../assests/avant.png"
import burnfit from "../../assests/burnfit.png"
import star11 from "../../assests/star11.png"
import vite from "../../assests/vitelab.png"
import mrecord from "../../assests/mrecord.svg"









const ProjectMore = () => {
  const projectsData = [

    {
      id: 1,
      title: "Insurance Platform for Zurich Kotak",
      name: "Zurich Kotak",
      url: "https://www.zurichkotak.com",
      description: "A sophisticated insurance management system tailored to provide users with financial security solutions. The platform integrates seamless navigation and offers various insurance packages.",
      image: glimpse3, // replace with actual image path if available
    },
    {
      id: 2,
      title: "Agricultural Solutions for Agro Orbit",
      name: "Agro Orbit",
      url: "https://agroorbit.com",
      description: "An agricultural platform offering solutions to improve crop yields and farm management. Agro Orbit leverages data analytics and IoT to provide farmers with real-time insights.",
      image: glimpse5, // replace with actual image path if available
    }, {
      id: 3,
      title: "Innovative Solutions for Hezky Tech",
      name: "Hezky Tech",
      url: "https://hezkytech.com", // replace with actual URL if available
      description: "A technology solutions company offering innovative software and hardware products across multiple industries. Hezky Tech focuses on delivering user-friendly interfaces and cutting-edge technologies.",
      image: glimpse1, // replace with actual image path if available
    }, {
      id: 4,
      title: "Healthcare Staffing Solutions for Locum",
      name: "Locum",
      url: "https://locume.netlify.app", // replace with actual URL if available
      description: "A healthcare staffing platform that connects medical professionals with temporary positions in hospitals and clinics. The platform simplifies job matching and streamlines the hiring process.",
      image: glimpse4, // replace with actual image path if available
    }, {
      id: 5,
      title: "Otto Buddy",
      name: "Otto Buddy",
      url: "https://play.google.com/store/apps/details?id=com.icici.surveyapp_revamp&hl=en", // replace with actual URL if available
      description: "A smart vehicle assistant application offering real-time traffic updates, vehicle diagnostics, and driving assistance. Otto Buddy aims to improve driving experiences with advanced safety features.",
      image: otto
    }, {
      id: 6,
      title: "Food Delivery Platform for JedloApp",
      name: "JedloApp",
      url: "https://jedloapp.in",
      description: "A robust food delivery application providing users with a wide selection of restaurants and cuisines. The platform ensures smooth navigation and easy ordering, coupled with secure payment integration.",
      image: glimpse2, // replace with actual image path if available
    },
    {
      id: 7,
      title: "Dental Health Platform for VC Orthodontics",
      name: "VC Orthodontics",
      // url: "https://vcorthodontics.com",
      description: "A comprehensive platform offering orthodontic solutions with seamless online appointment scheduling and patient management tools.",
      image: vc
    },
    {
      id: 9,
      title: "Cybersecurity Solutions for Cyberquess",
      name: "Cyberquess",
      url: "https://cyberquess.com",
      description: "A leading provider of cybersecurity services and solutions, Cyberquess specializes in safeguarding businesses against digital threats with advanced security tools, monitoring, and response strategies.",
      image: glimpse8, // replace with actual image path if available
    }, {
      id: 10,
      title: "Online Car Auction Platform for Bring a Trailer",
      name: "Gas Guzzler",
      // url: "https://bringatrailer.com",
      description: "A premier online car auction platform for classic, vintage, and collector vehicles. Bring a Trailer allows users to browse, bid, and buy rare automobiles, offering a curated selection of vehicles with detailed listings.",
      image: glimpse9, // replace with actual image path if available
    },
    {
      id: 11,
      title: "ICICI Lombard Ozone Plus",
      name: "ICICI Lombard Ozone Plus",
      url: "https://play.google.com/store/apps/details?id=com.icicilombard.ozoneplus&hl=en",
      description: "A health and wellness app designed to track fitness, offer health advice, and provide insurance-based wellness programs.",
      image: ozone
    }, {
      id: 12,
      title: "Automation Solutions for Roboquess",
      name: "Roboquess",
      url: "https://roboquess.com",
      description: "Roboquess specializes in delivering advanced robotics and automation solutions for industries. Their innovative technology optimizes production lines, improves efficiency, and reduces operational costs.",
      image: glimpse7, // replace with actual image path if available
    },
    {
      id: 14,
      title: "Creative Media Platform for Fisheye Hub",
      name: "Fisheye Hub",
      url: "https://apps.apple.com/in/app/fisheye-hub/id1286294135",
      description: "A creative media platform offering design and multimedia services to clients, focusing on innovation and customer satisfaction.",
      image: fisheye
    },
    {
      id: 15,
      title: "Digital Publishing Solutions for Vakils Pre Media",
      name: "Vakils Pre Media",
      url: "https://www.vakilspremedia.com",
      description: "A digital publishing platform providing end-to-end solutions for printing and media needs, including pre-press, design, and publishing services.",
      image: glimpse6, // replace with actual image path if available
    }, {
      id: 16,
      title: "Media Broadcasting Platform for Tu Voz Now",
      name: "Tu Voz Now",
      url: "https://www.tuvoznow.com",
      description: "An innovative media platform designed for broadcasting news, opinions, and entertainment. The platform allows users to voice their thoughts and connect with a wider audience.",
      image: tuvo
    }, {
      id: 17,
      title: "Medical Testing Solutions for Vital Lab",
      name: "Vital Lab",
      url: "https://vitallab.com",
      description: "A healthcare company specializing in medical testing and laboratory services. Vital Lab offers accurate diagnostic services with state-of-the-art testing technologies.",
      image: vite, // replace with actual image path if available
    }, {
      id: 18,
      title: "Crowdfunding Platform for Fundacle",
      name: "Fundacle",
      url: "https://play.google.com/store/apps/details?id=com.prox.fundacles", // replace with actual URL if available
      description: "An online crowdfunding platform that helps startups, charities, and projects raise funds from a wide audience. Fundacle simplifies campaign management and supporter engagement.",
      image: fund
    }, {
      id: 20,
      title: "Patient Management System for Mrecord Patient",
      name: "Mrecord Patient",
      description: "A comprehensive patient management platform designed for healthcare providers. Mrecord Patient enables easy record keeping, appointment scheduling, and patient history tracking.",
      image: mrecord, // replace with actual image path if available
    }, {
      id: 21,
      title: "Travel Solutions for Poorva Holidays",
      name: "Poorva Holidays",
      // url: "https://www.facebook.com/poorvaholidaysindia/",
      description: "Poorva Holidays is a travel and tourism company that offers personalized vacation packages, flight bookings, and hotel accommodations for domestic and international trips.",
      image: poorva
    },

    {
      id: 22,
      title: "Luxury Hospitality for Della International",
      name: "Della International",
      url: "https://dellainternationalpvtltd.com/",
      description: "Della International is a luxury hospitality and adventure resort offering world-class experiences, including five-star accommodations, dining, and extreme adventure activities.",
      image: della
    },
    {
      id: 23,
      title: "Nestpro - Your Professional Partner for Seamless Solutions",
      name: "NestPro",
      description: "At Nestpro, we specialize in delivering high-quality freelance solutions tailored to meet your specific needs. With expertise in cutting-edge technologies and a commitment to excellence, we provide seamless, efficient, and cost-effective services to help businesses thrive in the digital world.",
      image: nestpro
    }, {
      id: 24,
      title: "Entertainment Platform for StreamFlix",
      name: "StreamFlix",
      description: "StreamFlix is a premier OTT platform offering a vast library of movies, TV shows, documentaries, and original content. The platform supports multi-device streaming, personalized recommendations, and offline downloads.",
      image: ott
    }, {
      id: 25,
      title: "Flight Booking Solutions for FlyMate",
      name: "FlyMate",
      description: "FlyMate is a comprehensive flight booking platform that provides users with easy access to flight schedules, ticket booking, seat selection, and real-time updates. It offers competitive pricing, flight deals, and 24/7 customer support.",
      image: flight
    },
    {
      id: 26,
      title: "Your Learning Partner",
      name: "Tutor App",
      description: "At Tutot, we believe that every learner deserves personalized guidance to unlock their full potential. Our mission is to provide a seamless and engaging tutoring experience that connects students with expert tutors across various subjects and skills",
      image: tutor
    },
    {
      id: 27,
      title: "VF: Discover, Dance, and Connect",
      name: "VF App",
      description: "At VF, we are dedicated to bringing people together through engaging tasks, vibrant dance experiences, and exciting offline events. Our platform empowers users to discover new activities, connect with others, and create unforgettable memories",
      image: vf
    },
    {
      id: 28,
      title: "Fishey: Streamlined Attendance Management",
      name: "Fishey App",
      description: "Fishey is an innovative mobile app designed to simplify attendance tracking for students and staff. With features for roll calls, attendance records, and more, Fishey helps educational institutions manage attendance efficiently.",
      image: fishey
    },
    {
      id: 29,
      title: "Selas: Your School Management Hub",
      name: "Selar",
      description: "Selas is a comprehensive school management panel designed to streamline communication and organization within educational institutions. With features like a centralized dashboard, messaging, calendar, and database management, Selas empowers educators, students, and parents to stay connected and informed.",
      image: selas
    },
    {
      id: 30,
      title: "Avant: The Art of Diamonds",
      name: "Avant",
      description: "At Avant, we celebrate the timeless beauty of diamonds. Our curated collection features exquisite stones crafted to perfection, showcasing elegance and luxury. Whether you're searching for the perfect engagement ring or a stunning piece of jewelry, Avant is dedicated to providing exceptional quality and personalized service.",
      image: avant
    },
    {
      id: 31,
      title: "BurnFit: Your Ultimate Fitness Companion",
      name: "BurnFit",
      description: "BurnFit is your go-to app for achieving fitness goals and embracing a healthier lifestyle. Offering personalized workout plans, exercise tracking, and nutrition tips, BurnFit empowers users to stay motivated and reach their peak performance. Join our community and ignite your fitness journey today!",
      image: burnfit
    },
    {
      id: 32,
      title: "My11Star: Play. Compete. Win.",
      name: "My11Star",
      description: "My11Star is your premier fantasy sports app, designed to bring the thrill of competitive play to your fingertips. Create your dream teams, strategize your gameplay, and compete against others for a chance to win real money. Join us and turn your sports knowledge into rewards—where every game is an opportunity!",
      image: star11
    },
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

                onClick={() => window.location.href = `/project/${project.id}`} style={{ cursor: "pointer" }}
              />
              <div className="url-container d-flex justify-content-between align-items-center">
                <div>
                  {/* <div className="pro-name" onClick={() => window.location.href = `/project/${project.id}`} style={{cursor: "pointer"}} >{project.name}</div> */}
                  <div className="pro-url"><a href={project.url} target="_blank" > {project.name} </a></div>
                </div>
                <div>
                  <svg
                    width="46"
                    height="47"
                    viewBox="0 0 46 47"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => window.location.href = `/project/${project.id}`} style={{ cursor: "pointer" }}
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
