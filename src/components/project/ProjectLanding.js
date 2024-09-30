import React from "react";
import { useParams } from "react-router-dom";
import glimpse1 from "../../assests/hezky.png"
import glimpse2 from "../../assests/jedlo.png"
import glimpse3 from "../../assests/kotak.png"
import glimpse4 from "../../assests/locume.png"
import glimpse5 from "../../assests/agro.png"
import glimpse6 from "../../assests/vakil.png"
import glimpse7 from "../../assests/robo.png"
import glimpse8 from "../../assests/cyber.png"
import glimpse9 from "../../assests/gas.png"
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
    url: "https://vcorthodontics.com",
    description: "A comprehensive platform offering orthodontic solutions with seamless online appointment scheduling and patient management tools.",
    image: vc, // replace with actual image path if available
  }
  , {
    id: 8,
    title: "Cybersecurity Solutions for Cyberquess",
    name: "Cyberquess",
    url: "https://cyberquess.com",
    description: "A leading provider of cybersecurity services and solutions, Cyberquess specializes in safeguarding businesses against digital threats with advanced security tools, monitoring, and response strategies.",
    image: glimpse8, // replace with actual image path if available
  }, {
    id: 10,
    title: "Online Car Auction Platform for Bring a Trailer",
    name: "Gas Guzzler",
    url: "https://bringatrailer.com",
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
    image: glimpse7,
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJCsBiKoe8FNx31qubRoEHgDd_rJhJHIxQOg&s", // replace with actual image path if available
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
    url: "https://mrecordpatient.com", // replace with actual URL if available
    description: "A comprehensive patient management platform designed for healthcare providers. Mrecord Patient enables easy record keeping, appointment scheduling, and patient history tracking.",
    image: "https://cdn.prod.website-files.com/64abb91e69c1429ab62638be/64ba7cfb4b0c2ac2a47329aa_Blog-18---How-to-maintain-Patient-Record_.svg", // replace with actual image path if available
  }, {
    id: 21,
    title: "Travel Solutions for Poorva Holidays",
    name: "Poorva Holidays",
    // url: "https://poorvaholidays.com", // replace with actual URL if available
    description: "Poorva Holidays is a travel and tourism company that offers personalized vacation packages, flight bookings, and hotel accommodations for domestic and international trips.",
    image: "https://media.istockphoto.com/id/1179632938/photo/travel-planning-concept.jpg?s=612x612&w=0&k=20&c=anCdRAzlvZbh47kP5rM5T-Sy7bOj3FFZFTTYAtTQvY8", // replace with actual image path if available
  },

  {
    id: 22,
    title: "Luxury Hospitality for Della International",
    name: "Della International",
    url: "https://dellainternational.com", // replace with actual URL if available
    description: "Della International is a luxury hospitality and adventure resort offering world-class experiences, including five-star accommodations, dining, and extreme adventure activities.",
    image: della
  },
  {
    id: 23,
    title: "Nestpro - Your Professional Partner for Seamless Solutions",
    name: "NestPro",
    description: "At Nestpro, we specialize in delivering high-quality freelance solutions tailored to meet your specific needs. With expertise in cutting-edge technologies and a commitment to excellence, we provide seamless, efficient, and cost-effective services to help businesses thrive in the digital world.",
    image: nestpro
  },{
    id: 24,
    title: "Entertainment Platform for StreamFlix",
    name: "StreamFlix",
    url: "https://streamflix.com", // replace with actual URL if available
    description: "StreamFlix is a premier OTT platform offering a vast library of movies, TV shows, documentaries, and original content. The platform supports multi-device streaming, personalized recommendations, and offline downloads.",
    image: ott  },{
  id: 25,
  title: "Flight Booking Solutions for FlyMate",
  name: "FlyMate",
  url: "https://flymate.com", // replace with actual URL if available
  description: "FlyMate is a comprehensive flight booking platform that provides users with easy access to flight schedules, ticket booking, seat selection, and real-time updates. It offers competitive pricing, flight deals, and 24/7 customer support.",
  image: flight
}
];

const ProjectLanding = () => {
  const { id } = useParams();
  const project = projectsData.find((proj) => proj.id === parseInt(id));

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

        <div className="pro-img"><img src={project?.image} alt="img" /> </div>

      </div>
    </div>
  );
};

export default ProjectLanding;
