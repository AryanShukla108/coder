import React, { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import carrier from "../../assests/carrier.png";
import global from "../../assests/global.png";
import office1 from "../../assests/office1.jpg";
import office2 from "../../assests/office2.jpg";
import office3 from "../../assests/office3.jpg";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const CarrierPage = () => {
    const jobData = [
        {
            role: "Product Manager",
            location: "On site",
            description:
                "FutureSphere is in need of a talented Product Designer with more than 3 years of past experience in the tech sector.",
        },
        {
            role: "Human Resources",
            location: "On site",
            description:
                "FutureSphere is seeking an HR specialist to manage our expanding team.",
        },
        {
            role: "UI/UX Designer",
            location: "Remote",
            description:
                "Join our remote design team to create engaging user experiences.",
        },
        {
            role: "Software Engineer",
            location: "Remote",
            description:
                "We are looking for a Software Engineer with expertise in React.js and Node.js.",
        },
        {
            role: "Data Analyst",
            location: "On site",
            description:
                "Data Analyst with a knack for interpreting complex data sets needed.",
        },
        {
            role: "Security Specialist",
            location: "On site",
            description:
                "Help maintain our cybersecurity with your expertise in security protocols.",
        },
        {
            role: "Product Designer",
            location: "Remote",
            description:
                "Seeking a creative Product Designer to revolutionize our product lines.",
        },
        {
            role: "Marketing Manager",
            location: "Remote",
            description:
                "Drive our digital marketing campaigns and increase our market presence.",
        },
        {
            role: "Customer Support Specialist",
            location: "Part Time - Remote",
            description: "Provide outstanding customer service and support remotely.",
        },
        {
            role: "DevOps Engineer",
            location: "On site",
            description:
                "Manage our infrastructure and continuous integration systems.",
        },
        {
            role: "Business Analyst",
            location: "On site",
            description: "Analyze business trends and project future revenues.",
        },
        {
            role: "Graphic Designer",
            location: "Remote",
            description:
                "Design captivating graphics for our digital and print media.",
        },
        {
            role: "Sales Executive",
            location: "On site",
            description:
                "Looking for a proactive Sales Executive to help expand our client base.",
        },
        {
            role: "Quality Assurance Tester",
            location: "Remote",
            description:
                "Ensure the highest software quality through rigorous testing.",
        },
    ];

    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 8;

    const pages = Math.ceil(jobData.length / itemsPerPage);
    const startIndex = currentPage * itemsPerPage;
    const visibleJobs = jobData.slice(startIndex, startIndex + itemsPerPage);

    const nextPage = () => {
        if (currentPage < pages - 1) setCurrentPage(currentPage + 1);
    };

    const prevPage = () => {
        if (currentPage > 0) setCurrentPage(currentPage - 1);
    };

    return (
        <>
            <div className="ContactUsImg">
                <div>
                    <div className="join">
                        Join{" "}
                        <span className="heading-color">Our Team & Shape the Future</span>
                    </div>
                    <div className="para paras">
                        Looking for an opportunity to showcase your web design skills? Join
                        our team of talented designers, both remote and on-site, and bring
                        your creativity to life. Collaborate with a dynamic group, create
                        stunning websites, and make a lasting impact in the world of design,
                        no matter where you are.
                    </div>
                    <div>
                        <input
                            type="text"
                            className="input-field"
                            placeholder="Enter your email"
                        />
                        <button className="send-btn">
                            Send Now <ArrowForwardIcon />
                        </button>
                    </div>
                </div>
                <div>
                    <img src={carrier} alt="contactusimg" className="contactusimg" />
                </div>
            </div>
            <div className="carrier-page">
                <div className="perks-data">
                    <div>
                        <img src={global} alt="global" />
                    </div>
                    <div style={{ width: "480px" }}>
                        <div className="perks">Perks </div>
                        <div className="perks-head">Perks That Go Beyond Borders</div>
                        <div className="perks-para">
                            "Experience a world of benefits with our global presence. Enjoy
                            flexible work environments, cultural diversity, professional
                            development opportunities, travel adventures, global networking,
                            and competitive compensation.
                        </div>
                    </div>
                </div>
                <div className="box-data">
                    <div className="wrap-box">
                        <div className="box">
                            <div className="head">Flexible Work Environment</div>
                            <div className="box-para">
                                Enjoy the freedom to work from anywhere in the world, whether
                                it's the comfort of your home office or the excitement of a new
                                city. Embrace a work-life balance that suits your needs.
                            </div>
                        </div>
                        <div className="box">
                            <div className="head">Cultural Diversity</div>
                            <div className="box-para">
                                Experience the richness of working with a global team.
                                Collaborate with professionals from different backgrounds,
                                cultures, and perspectives, fostering creativity, innovation,
                                and personal growth.
                            </div>
                        </div>
                        <div className="box">
                            <div className="head">Professional Development</div>
                            <div className="box-para">
                                Gain access to a wide range of learning and development
                                opportunities. From training programs to conferences, sharpen
                                your skills and expand your knowledge to stay ahead in the
                                ever-evolving industry.
                            </div>
                        </div>
                        <div className="box">
                            <div className="head">Travel Opportunities</div>
                            <div className="box-para">
                                Embark on exciting journeys and visit different locations as
                                part of your job. Engage in on-site collaborations, attend
                                conferences, or simply enjoy the experience of working in
                                diverse environments.
                            </div>
                        </div>
                        <div className="box">
                            <div className="head">Global Networking</div>
                            <div className="box-para">
                                Connect with professionals from around the world and build a
                                vast network. Exchange ideas, share experiences, and create
                                meaningful connections that can open doors to future
                                collaborations and career growth.
                            </div>
                        </div>
                        <div className="box">
                            <div className="head">Competitive Compensation</div>
                            <div className="box-para">
                                Benefit from a competitive compensation package that recognizes
                                your skills and contributions. Enjoy the perks of a global
                                company that values your expertise and rewards you accordingly.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="offers-carriers">
                    <div className="perks">Our Offices </div>
                    <div className="office-head">
                        Discover Our Global Network of Offices
                    </div>
                    <div className="office-para">
                        Experience our expansive network of offices across the world,
                        connecting you to our exceptional services wherever you are.
                    </div>
                    <div className="office-card">
                        <div className="img-card">
                            <img src={office1} alt="office1" className="office1" />
                            <div className="add">
                                <div className="adres">Mumbai</div>
                                <div className="loca">123 Main Street, Suite 200</div>
                                <div className="num">(555) 123-4567</div>
                            </div>
                        </div>
                        <div className="img-card">
                            <img src={office2} alt="office1" className="office1" />
                            <div className="add">
                                <div className="adres">New Delhi (coming soon)</div>
                                <div className="loca">789 Canyon Road</div>
                                <div className="num">(555) 555-1234</div>
                            </div>
                        </div>
                        <div className="img-card">
                            <img src={office3} alt="office1" className="office1" />
                            <div className="add">
                                <div className="adres">Gurugram (coming soon)</div>
                                <div className="loca">789 Oak Street, 4th Floor, Suite 402</div>
                                <div className="num">+44 20 1234 5678</div>
                            </div>
                        </div>
                    </div>
                    <div className="office-btn">
                        {/* <button className="sign">Signup</button> */}
                        <button className="cont"  onClick={() => (window.location.href = "contact-us")}>Contact Us</button>
                    </div>
                </div>
                <div className="opennings">
                    <div className="text-openings">
                        <div className="txt">
                            Current{" "}
                            <span style={{ color: "rgba(234, 66, 50, 1)" }}>Openings</span>
                        </div>
                        <div className="para">
                            We are always on the lookout for talented individuals who are
                            passionate about creating exceptional digital experiences. Whether
                            you're a designer, engineer, project manager, or have skills that
                            align with our agency's mission, we encourage you to explore our
                            open positions.
                        </div>
                    </div>
                    <div className="opening-data">
                        {visibleJobs.map((job, index) => (
                            <div key={index} className="job-listing">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <div className="role">{job.role}</div>
                                        <div className="full">
                                            Full Time -{" "}
                                            <span style={{ color: "rgba(234, 66, 50, 1)" }}>
                                                {job.location}
                                            </span>
                                        </div>
                                        <div className="des">{job.description}</div>
                                    </div>
                                    <div className="arrow-icon"  onClick={() => (window.location.href = "job")}>
                                        <ArrowForwardIcon
                                            style={{ color: "rgba(254, 191, 36, 1)" }}

                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="pagination">
                            <div
                                className="arrow-icon"
                                onClick={prevPage}
                                disabled={currentPage === 0}
                            >
                                {" "}
                                <ArrowBackIcon style={{ color: "rgba(254, 191, 36, 1)" }} />
                            </div>
                            <div
                                className="arrow-icon"
                                onClick={nextPage}
                                disabled={currentPage === pages - 1}
                            >
                                {" "}
                                <ArrowForwardIcon style={{ color: "rgba(254, 191, 36, 1)" }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carrier-rocket">
                <div className="d-flex justify-content-center in-touch">
                    <div className="get-in-touch">
                        <div className="touch-txt">
                            Get in touch and start growing your startup today
                        </div>
                        <div className="d-flex" style={{ gap: "28px" }}>
                            <button
                                className="touch-btn"
                                onClick={() => (window.location.href = "hire")}
                            >
                                Get in touch
                            </button>
                            <button
                                className="started-btn"
                                onClick={() => (window.location.href = "hire")}
                            >
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CarrierPage;
