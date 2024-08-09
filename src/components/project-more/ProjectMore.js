import React, { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const ProjectMore = () => {
    const projectsData = [
        {
            title: "E-Commerce Platform for Fashion Hub",
            name: "Chic Boutique",
            url: "https://www.chicboutique.com",
            description:
                "We developed a visually stunning and user-friendly e-commerce platform for Chic Boutique, a renowned fashion retailer. The platform featured seamless product browsing, secure payment integration, and personalized recommendations, resulting in increased online sales and customer satisfaction.",
            image:
                "https://s3-alpha-sig.figma.com/img/6444/13d9/18669aafa7693c52a3b7832a7db9fd6c?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DuM5qx71N0os~u~zN36XwizYebv281gPc7U2nt5-vhXC6NyKxItHDh03n0wMxrIntmYXqTQyM-heNniw-MzGHQTX68hnxUhoVpDhfZRov3~bvxp98PPV8nIXNxx3D5VIHVWFxZQc~KHurw~ZgJIZmrT19zPWApkZ9VGnHK495O~3ACIViw94fHgbdgjr-D9vSuMELW6yRx41hnCJZRsvai1NNKS2GuKXjs7STFHqPim~W5RXPyxPvQvEl0hzXiHWZKUxgbhVu5WSyVuePgKSdyTbA~vM3uBn1XhYz-5L1lI7OgOUOdxhaWvbNmUAImREkgqSZlV2jaJqbS-5eVb4rQ__", // replace with actual image path
        },
        {
            title: "Mobile App for Food Delivery Service",
            name: "HungryBites",
            url: "https://www.hungrybites.com",
            description:
                "HungryBites approached us to create a mobile app that streamlined their food delivery service. The app included features like real-time order tracking, easy menu customization, and secure payment options, resulting in improved customer convenience and operational efficiency.",
            image:
                "https://s3-alpha-sig.figma.com/img/7280/027f/4ed81d12a30dd5c103d371998799e5ab?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V5tQXO9c6UzWHBElJSgzbj8BW4-D10~YP3nwSrZNRVtUYkFiZ99vrUmuxPGpvT~5bL~SAkohRybbiVF30Z346EQbcu~app3xQMcL~8Dkmq~5XmXj0gne8JaAYEE2WyDl~Nuf3E3SA77td6hA2cl-uvLJEPM4xOwpGj0YKU5tUsb2q2mO4xXlYcNDrBbyrhJTTa8EuHlGNxK8d5eMUYNfcZJe4Jj8Eco2GVZ81G1bVblX6aHz-YnV6aYQMqyV0qRAjhYb91MolpVfTCzktPXt6d9Gh4pytD-Tnag9RtydizIUlo-gVMgDbbHR4MUMQoMZwfYez56zs0HCMzvH-T1-rg__", // replace with actual image path
        },
        {
            title: "Booking and Reservation System for Event Management",
            name: "EventMasters",
            url: "https://www.eventmasters.com",
            description:
                "EventMasters required a comprehensive booking and reservation system for their event management services. We developed a user-friendly platform that allowed seamless event registration, ticketing, and attendee management, resulting in streamlined processes and enhanced customer experiences.",
            image:
                "https://s3-alpha-sig.figma.com/img/7280/027f/4ed81d12a30dd5c103d371998799e5ab?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V5tQXO9c6UzWHBElJSgzbj8BW4-D10~YP3nwSrZNRVtUYkFiZ99vrUmuxPGpvT~5bL~SAkohRybbiVF30Z346EQbcu~app3xQMcL~8Dkmq~5XmXj0gne8JaAYEE2WyDl~Nuf3E3SA77td6hA2cl-uvLJEPM4xOwpGj0YKU5tUsb2q2mO4xXlYcNDrBbyrhJTTa8EuHlGNxK8d5eMUYNfcZJe4Jj8Eco2GVZ81G1bVblX6aHz-YnV6aYQMqyV0qRAjhYb91MolpVfTCzktPXt6d9Gh4pytD-Tnag9RtydizIUlo-gVMgDbbHR4MUMQoMZwfYez56zs0HCMzvH-T1-rg__", // replace with actual image path
        },
        {
            title: "Custom Software for Workflow Automation",
            name: "ProTech Solutions",
            url: "https://www.protechsolutions.com",
            description:
                "ProTech Solutions required custom software to streamline their workflow automation processes. We developed a scalable solution that integrated various business functions, improved data accuracy, and reduced operational costs.",
            image:
                "https://s3-alpha-sig.figma.com/img/7280/027f/4ed81d12a30dd5c103d371998799e5ab?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V5tQXO9c6UzWHBElJSgzbj8BW4-D10~YP3nwSrZNRVtUYkFiZ99vrUmuxPGpvT~5bL~SAkohRybbiVF30Z346EQbcu~app3xQMcL~8Dkmq~5XmXj0gne8JaAYEE2WyDl~Nuf3E3SA77td6hA2cl-uvLJEPM4xOwpGj0YKU5tUsb2q2mO4xXlYcNDrBbyrhJTTa8EuHlGNxK8d5eMUYNfcZJe4Jj8Eco2GVZ81G1bVblX6aHz-YnV6aYQMqyV0qRAjhYb91MolpVfTCzktPXt6d9Gh4pytD-Tnag9RtydizIUlo-gVMgDbbHR4MUMQoMZwfYez56zs0HCMzvH-T1-rg__", // replace with actual image path
        },
        {
            title: "Web Portal for Real Estate Listings",
            name: "Dream Homes Realty",
            url: "https://www.dreamhomesrealty.com",
            description:
                "Dream Homes Realty wanted an intuitive web portal for showcasing their property listings. We created a visually appealing platform with advanced search filters, virtual tours, and a user-friendly interface, enabling potential buyers to find their dream homes easily.",
            image:
                "https://s3-alpha-sig.figma.com/img/7280/027f/4ed81d12a30dd5c103d371998799e5ab?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V5tQXO9c6UzWHBElJSgzbj8BW4-D10~YP3nwSrZNRVtUYkFiZ99vrUmuxPGpvT~5bL~SAkohRybbiVF30Z346EQbcu~app3xQMcL~8Dkmq~5XmXj0gne8JaAYEE2WyDl~Nuf3E3SA77td6hA2cl-uvLJEPM4xOwpGj0YKU5tUsb2q2mO4xXlYcNDrBbyrhJTTa8EuHlGNxK8d5eMUYNfcZJe4Jj8Eco2GVZ81G1bVblX6aHz-YnV6aYQMqyV0qRAjhYb91MolpVfTCzktPXt6d9Gh4pytD-Tnag9RtydizIUlo-gVMgDbbHR4MUMQoMZwfYez56zs0HCMzvH-T1-rg__", // replace with actual image path
        },
        {
            title: "Mobile App for Fitness Tracking",
            name: "FitLife Tracker",
            url: "https://www.fitlifetracker.com",
            description:
                "FitLife Tracker approached us to develop a mobile app that tracked fitness activities and provided personalized workout plans. The app included features such as activity tracking, progress monitoring, and social sharing, empowering users to lead healthier lifestyles.",
            image:
                "https://s3-alpha-sig.figma.com/img/b5c8/4cd9/8bb2c3753edae556baa8728a19a2ce60?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kxTewwqVjLnN1E3wfX53lMhX5~yZcCmGWmSGPosHLDaA8F6HXkdk1tTjtJBq~X0K5jLko1i3Id6DLSWrarWDQHQSaptFXt2qqVzAr~ovBwbUO6oFhUuhTIK0dQpeVMwgdWXjY8AWVn7DkAqDqeALw39etvD8JZ0Ti8LEgYXl3C7ry~OKs9g0EeZCUlGnPaAXukwkT1th-DHChCpYZVKLJ6G3bJHbT5qWkVZVBUEX2zoH8C0boc8g09w1HhRSMq93BCqhwdVuCimn0nTlXtHbqib6bElUm~ca-tMytbXUkuAslR8NLrvX1WsHCu1S7knBYmSxv1TpGxNSAUrvH42Gbw__", // replace with actual image path
        },
        {
            title: "Custom Software for Supply Chain Management",
            name: "Global Logistics Solutions",
            url: "https://www.globallogisticssolutions.com",
            description:
                "Global Logistics Solutions required a custom software solution to streamline their supply chain operations. We developed a scalable system that optimized inventory management, automated order processing, and enhanced logistics tracking, resulting in improved efficiency and reduced costs.",
            image:
                "https://s3-alpha-sig.figma.com/img/d4df/999d/063181c325bc6f74060c14ed8b9f6d9c?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EXzuf6e7vSxtrwtkct2RFff1Xw1jyCuf4HSAFUPEVDmROOiu60edyolTbiTnLCFH296YPZB5EjMbp2qYFLARNjR3XGeYI5j4BXw4TKslwKncRc5J~nHcQzVLbRU7MrRh19aAOHMLz1N8YL8Rtq9U19OZEE0ezCNIIaa4PqHpELz5ZwvHa8t0d8LmrkQZvYPZYGYY8gvYIWAaN1arOkFvv7KI4tAR6T8C4f0UIoSZrDPrFaOh4dNdCPLM~n2RcrG~8EOaZ8AUfPEupVsVca2iINuGmXFcgIKlYQ~9fPBGAQYtWVXqINEPnfw8wztiTCKPknqqffgYHSgKlvLqlRDieQ__", // replace with actual image path
        },
        {
            title: "Educational Platform for Online Learning",
            name: "EduConnect",
            url: "https://www.educonnect.com",
            description:
                "EduConnect sought an educational platform to facilitate online learning. We developed an interactive platform with virtual classrooms, multimedia content, and student progress tracking, providing a seamless and engaging learning experience for students of all ages.",
            image:
                "https://s3-alpha-sig.figma.com/img/467b/84f9/81bb61fbf2d5ce527040e8417a8be5c5?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QT~u3gx-dSux1LwiunUSE3mBohI6Z0Ofm-XQv-VopKw0bnfD-jjAKKGgpS32io35HUHTcxSMfoNetpmsLiw6w09~HtBQxc6-9XwaYblWzPC4QUVinatR7XpiVA3M1w5y79nEH1hmP3AfxYu11KnX6CSOJ4ou1u9pX20XtvNWRt9Qz6H1t8uoO82IuDhubaeXpS8Q310lGcx2YAaH6twsh2Bu37F1OIpY7yly53BmJv~5ZmrWC0Zb-kKnvQ7OfqCJbBYhyiIoiGF6TRghcYnr2kgj-SzLFisx8hVEBI1oILBdNsNk3tBaVggSJdUf~StFMBeijK-nwredGv~86MpS1w__", // replace with actual image path
        },
        {
            title: "Mobile App for Travel Planning",
            name: "WanderWise",
            url: "https://www.wanderwise.com",
            description:
                "WanderWise wanted a mobile app that simplified travel planning and discovery. We developed an app with features like personalized itineraries, destination guides, and integrated booking options, making it easier for travelers to explore new destinations.",
            image:
                "https://s3-alpha-sig.figma.com/img/9f86/1da6/af4de9f623f9e6a1715b8dbf8a842b45?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZeKxt05s1we0eC0KkVh7Yg1FLfnWSZpU1ouBaFwd4yFDgWtgZRyVYPr52xwas7QpjHKxHHE1~jM63qiIiC0n9WPfe7dr6Gdk4pjYmcGj~HsgLTjkp50vLi20-wluZ2XWEHPw3OtEA7vo3wH7U5HJFwB88mAi5LeF-y2To9fNl7p7jxixyMRKFS0zsxGv2UwPy9mfBzY7MQTqKWCB3wMwifnOr2DpZ-q3w5FCu9kxUTm6lXDtqo-n8Ex76wAWQbQTu9SeXB-uX9ohSbA~ZPW-op8NM-6LAp6nC3GbyiZuytRdwq4GoCkYnbO5ZM1yTmcHSsasaEQ-DI1MhTJc96RYWg__", // replace with actual image path
        },
        {
            title: "Web Application for Customer Relationship Management",
            name: "ConnectCRM",
            url: "https://www.connectcrm.com",
            description:
                "ConnectCRM needed a web application to manage their customer relationships effectively. We developed a feature-rich CRM platform with lead management, communication tracking, and data analytics, enabling businesses to nurture customer relationships and drive growth.",
            image:
                "https://s3-alpha-sig.figma.com/img/a389/536a/4e65afa44c0d65bdfbd4cc30c96adaf0?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cU6OmrBQ6SRtabE2K96LJMt4Nsa5TULrC9sYPH01y9nivSFYPHIyrwCsqeOHZZZttChODE~BS5ey6nKuLng~dTx54sXrC-6uKB90n1XtmBoqimtc9EYRxYH1EZrsxwad55~iEVe4M3hEIK6VxYxKXz-wD~fOaW1ndp6npK78zHYqV91PVWsc3hVaUsJ~Dc7AfhXGzqJYLcKuGWWULG7el~JYnpYOh-ndGFXO7VNf7cgMqBqkejfPtbt5Lxrthv9PTgrdNcors6l8XfyEpWH1l90qd6PRCP9NBh1bJ7geQx2SsEm2NPi7pLpmYCnYr1nGHaboarpftnz8~Ert0K4~Gg__", // replace with actual image path
        },
    ];

    const [currentSet, setCurrentSet] = useState(1);

    const handleNext = () => {
        setCurrentSet(currentSet === 1 ? 2 : 1);
    };

    const handlePrevious = () => {
        setCurrentSet(currentSet === 2 ? 1 : 2);
    };

    const dataToShow =
        currentSet === 1 ? projectsData.slice(0, 8) : projectsData.slice(8);

    return (
        <div className="project-more">
            <div className="head">
                <div className="heading-color">Portfolio</div>
                <div className="sm-head">
                    Check our recent works we delivered to our clients
                </div>
            </div>
            <div className="projects-grid">
                {dataToShow.map((project, index) => (
                    <div key={index} className="project-item">
                        <div className="pro-title">{project.title}</div>
                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                            <img
                                src={project.image}
                                alt={project.name}
                                className="project-img"
                            />
                            <div className="url-container d-flex justify-content-between align-items-center">
                                <div>
                                    <div className="pro-name">{project.name}</div>
                                    <div className="pro-url">{project.url}</div>
                                </div>
                                <div>
                                    <svg
                                        width="46"
                                        height="47"
                                        viewBox="0 0 46 47"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
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
                        </a>
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
