import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { InputTextarea } from "primereact/inputtextarea";


const generateMailtoLink = (name, company, email, phone, message) => {
    const subject = encodeURIComponent("Contact Form Submission");
    const body = encodeURIComponent(`Name: ${name}\nCompany: ${company}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`);
    return `mailto:${email}?subject=${subject}&body=${body}`;
};

const Faq = () => {

    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const mailtoLink = generateMailtoLink(name, company, email, phone, message);
        window.location.href = mailtoLink; // Open the mail client with pre-filled information
    };



    return (
        <>
            <div className="Faq">
                <div className="head">FAQs</div>
                <div className="row d-flex justify-content-between">
                    <div className="accordian-faq">
                        <div>
                            <Accordion >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                >
                                    <Typography>
                                        How is SOV Technologies different from other hiring platforms?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        <div className="text">
                                            With SOV Technologies, clients can hire software developers with
                                            ease.
                                        </div>
                                        <ul>
                                            <li className="sm-text">
                                                Top vetted profiles available within a week
                                            </li>
                                            <li className="sm-text">99% guaranteed remote joining</li>
                                            <li className="sm-text">Best post-hiring services</li>
                                            {/* <li className="sm-text">2-weeks trial period</li> */}
                                        </ul>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                >
                                    <Typography>
                                        What types of custom software solutions does your company
                                        develop?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        <ul>
                                            <li className="sm-text">
                                                ERP systems for integrated business processes
                                            </li>
                                            <li className="sm-text">
                                                CRM systems for customer interactions
                                            </li>
                                            <li className="sm-text">
                                                BI solutions for data insights
                                            </li>
                                            <li className="sm-text">
                                                E-commerce platforms for online sales
                                            </li>
                                            <li className="sm-text">Custom web/mobile apps</li>
                                            <li className="sm-text">
                                                SCM systems for supply optimization
                                            </li>
                                            <li className="sm-text">Data management systems</li>
                                            <li className="sm-text">Healthcare info systems</li>
                                            <li className="sm-text">Finance/accounting software</li>
                                            <li className="sm-text">
                                                HRMS for employee processes. Tailored to diverse
                                                industry needs.
                                            </li>
                                        </ul>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                >
                                    <Typography>
                                        How do you ensure the quality and security of the software
                                        you build?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        <ul>
                                            <li className="sm-text">
                                                Testing: Comprehensive methodologies for issue
                                                resolution
                                            </li>
                                            <li className="sm-text">
                                                Code Reviews: Regular reviews for standards adherence
                                            </li>
                                            <li className="sm-text">
                                                Security Standards: Follow industry norms like OWASP
                                            </li>
                                            <li className="sm-text">
                                                Updates: Proactive monitoring for regular patches
                                            </li>
                                            <li className="sm-text">
                                                Secure Development: Integrated security from design to
                                                maintenance
                                            </li>
                                            <li className="sm-text">
                                                Access Control: Implement controls and encryption
                                            </li>
                                            <li className="sm-text">
                                                Continuous Improvement: Adapt to emerging threats for
                                                enhanced security.
                                            </li>
                                        </ul>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                >
                                    <Typography>
                                        What programming languages and technologies does your team
                                        specialize in?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        <ul>
                                            <li className="sm-text">
                                                JavaScript, Python, Java, C#, Swift/Objective-C, Ruby,
                                                C++
                                            </li>
                                            <li className="sm-text">
                                                HTML5, CSS3, React, Angular, Vue.js, Django, Flask,
                                                ASP.NET Core, Spring Boot, Express.js
                                            </li>
                                            <li className="sm-text">
                                                MySQL, PostgreSQL, SQL Server, MongoDB, Cassandra, Redis
                                            </li>
                                            <li className="sm-text">AWS, Azure, GCP</li>
                                            <li className="sm-text">
                                                Docker, Kubernetes, Jenkins, Travis CI, CircleCI, Git,
                                                GitHub, GitLab.
                                            </li>
                                        </ul>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                >
                                    <Typography>
                                        What is the process for hiring Contract staff developers
                                        through your company?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        <ul>
                                            <li className="sm-text">Requirement Analysis</li>
                                            <li className="sm-text">Candidate Sourcing</li>
                                            <li className="sm-text">Screening</li>
                                            <li className="sm-text">Technical Assessment</li>
                                            <li className="sm-text">Vetting</li>
                                            <li className="sm-text">Negotiation</li>
                                            <li className="sm-text">Onboarding</li>
                                            <li className="sm-text">Ongoing Support</li>
                                            <li className="sm-text">Contract Renewal/Replacement.</li>
                                        </ul>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                >
                                    <Typography>
                                        How do you handle project management and communication with
                                        clients during the development process?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        <ul>
                                            <li className="sm-text">Regular Meetings</li>
                                            <li className="sm-text">Project Tracking Tools</li>{" "}
                                            <li className="sm-text">Transparent Communication</li>{" "}
                                            <li className="sm-text">Progress Reports</li>{" "}
                                            <li className="sm-text">Agile Methodologies</li>{" "}
                                            <li className="sm-text">Issue Resolution</li>{" "}
                                            <li className="sm-text">Documented Requirements</li>{" "}
                                            <li className="sm-text">Change Management</li>{" "}
                                            <li className="sm-text">Feedback Loops.</li>
                                        </ul>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                >
                                    <Typography>
                                        What is your approach to scalability and future-proofing
                                        custom software solutions?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        <ul>
                                            <li className="sm-text">Modular Design</li>
                                            <li className="sm-text">Cloud Infrastructure</li>{" "}
                                            <li className="sm-text">Performance Optimization</li>{" "}
                                            <li className="sm-text">Flexibility</li>{" "}
                                            <li className="sm-text">Technology Stack Selection</li>{" "}
                                            <li className="sm-text">Continuous Monitoring</li>
                                            <li className="sm-text">Standards Adherence.</li>{" "}
                                        </ul>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                >
                                    <Typography>
                                        What kind of support and maintenance services do you provide
                                        after the software is deployed?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        <ul>
                                            <li className="sm-text">Bug Fixes</li>
                                            <li className="sm-text">Updates and Upgrades</li>
                                            <li className="sm-text">Performance Monitoring</li>
                                            <li className="sm-text">Security Measures</li>
                                            <li className="sm-text">User Support</li>
                                            <li className="sm-text">Scalability Evaluation</li>
                                            <li className="sm-text">Documentation Updates</li>
                                            <li className="sm-text">Client Communication.</li>
                                        </ul>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                >
                                    <Typography>
                                        Can you outline your pricing structure for both custom software development and developer staffing services?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        <div className="text">
                                            With SOV Technologies, clients can hire software developers with
                                            ease.
                                        </div>
                                        <ul>
                                            <li className="sm-text">
                                                Top vetted profiles available within a week
                                            </li>
                                            <li className="sm-text">99% guaranteed remote joining</li>
                                            <li className="sm-text">Best post-hiring services</li>
                                            <li className="sm-text">2-weeks trial period</li>
                                        </ul>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </div>
                    <div className=" contact">
                        <div className="int-head">
                            Find Interview-ready candidates in <span>24 hours</span>
                        </div>
                        <div className="input-text-container">
                            <div>
                                <div className="sm-input-text">
                                    <svg className="svg-sm" width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.5 2H14.25V1.25C14.25 1.05109 14.171 0.860322 14.0303 0.71967C13.8897 0.579018 13.6989 0.5 13.5 0.5C13.3011 0.5 13.1103 0.579018 12.9697 0.71967C12.829 0.860322 12.75 1.05109 12.75 1.25V2H5.25V1.25C5.25 1.05109 5.17098 0.860322 5.03033 0.71967C4.88968 0.579018 4.69891 0.5 4.5 0.5C4.30109 0.5 4.11032 0.579018 3.96967 0.71967C3.82902 0.860322 3.75 1.05109 3.75 1.25V2H1.5C1.10218 2 0.720644 2.15804 0.43934 2.43934C0.158035 2.72064 0 3.10218 0 3.5V18.5C0 18.8978 0.158035 19.2794 0.43934 19.5607C0.720644 19.842 1.10218 20 1.5 20H16.5C16.8978 20 17.2794 19.842 17.5607 19.5607C17.842 19.2794 18 18.8978 18 18.5V3.5C18 3.10218 17.842 2.72064 17.5607 2.43934C17.2794 2.15804 16.8978 2 16.5 2ZM3.75 3.5V4.25C3.75 4.44891 3.82902 4.63968 3.96967 4.78033C4.11032 4.92098 4.30109 5 4.5 5C4.69891 5 4.88968 4.92098 5.03033 4.78033C5.17098 4.63968 5.25 4.44891 5.25 4.25V3.5H12.75V4.25C12.75 4.44891 12.829 4.63968 12.9697 4.78033C13.1103 4.92098 13.3011 5 13.5 5C13.6989 5 13.8897 4.92098 14.0303 4.78033C14.171 4.63968 14.25 4.44891 14.25 4.25V3.5H16.5V6.5H1.5V3.5H3.75ZM16.5 18.5H1.5V8H16.5V18.5ZM12.9056 10.4694C12.9754 10.539 13.0307 10.6217 13.0684 10.7128C13.1062 10.8038 13.1256 10.9014 13.1256 11C13.1256 11.0986 13.1062 11.1962 13.0684 11.2872C13.0307 11.3783 12.9754 11.461 12.9056 11.5306L8.40563 16.0306C8.33597 16.1004 8.25325 16.1557 8.1622 16.1934C8.07116 16.2312 7.97356 16.2506 7.875 16.2506C7.77644 16.2506 7.67884 16.2312 7.58779 16.1934C7.49675 16.1557 7.41403 16.1004 7.34437 16.0306L5.09437 13.7806C4.95364 13.6399 4.87458 13.449 4.87458 13.25C4.87458 13.051 4.95364 12.8601 5.09437 12.7194C5.23511 12.5786 5.42598 12.4996 5.625 12.4996C5.82402 12.4996 6.01489 12.5786 6.15563 12.7194L7.875 14.4397L11.8444 10.4694C11.914 10.3996 11.9967 10.3443 12.0878 10.3066C12.1788 10.2688 12.2764 10.2494 12.375 10.2494C12.4736 10.2494 12.5712 10.2688 12.6622 10.3066C12.7533 10.3443 12.836 10.3996 12.9056 10.4694Z" fill="#EA4232" />
                                    </svg>
                                    Book A Call</div>
                            </div>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Learn more with our experts"
                            />
                        </div>
                        <div className="input-text-container">
                            <div>
                                <div className="sm-input-text">
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21.312 0.688755C21.1234 0.500254 20.8879 0.365444 20.6299 0.298212C20.3718 0.23098 20.1005 0.233756 19.8439 0.306255H19.8298L1.83543 5.76625C1.54251 5.85049 1.28221 6.02196 1.08917 6.25784C0.896144 6.49371 0.779547 6.78278 0.75491 7.08658C0.730272 7.39037 0.798764 7.69445 0.951265 7.95835C1.10376 8.22224 1.33304 8.43342 1.60855 8.56376L9.63543 12.3653L13.437 20.3922C13.557 20.6492 13.7481 20.8666 13.9876 21.0186C14.2271 21.1706 14.5052 21.2509 14.7889 21.25C14.832 21.25 14.8751 21.2481 14.9182 21.2444C15.221 21.2199 15.5089 21.1034 15.7435 20.9105C15.9782 20.7176 16.1482 20.4576 16.2307 20.1653L21.687 2.17094C21.687 2.16626 21.687 2.16157 21.687 2.15688C21.7604 1.90091 21.7644 1.63 21.6985 1.37199C21.6326 1.11397 21.4992 0.878152 21.312 0.688755ZM14.7973 19.7359L14.7926 19.7491L11.1026 11.9594L15.5314 7.52969C15.6661 7.3879 15.7401 7.19908 15.7376 7.00351C15.7351 6.80794 15.6563 6.62108 15.518 6.48278C15.3797 6.34448 15.1928 6.26568 14.9972 6.26318C14.8017 6.26067 14.6128 6.33466 14.4711 6.46938L10.0414 10.8981L2.25074 7.20813H2.26386L20.2507 1.75001L14.7973 19.7359Z" fill="#EA4232" />
                                    </svg>
                                    Email Us</div>
                            </div>
                            <input
                                type="text"
                                className="form-control"
                                placeholder=" info@sovtechnologies.com"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="faq-form">
                <div className="txt">Discover how we can help your business grow</div>
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-6">
                            <input type="text" placeholder="Name" className="form-control"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="col-6">
                            <input
                                type="text"
                                placeholder="Company"
                                className="form-control"
                                value={company}
                                onChange={(e) => setCompany(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <input type="text" placeholder="Email" className="form-control"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="col-6">
                            <input
                                type="text"
                                placeholder="Phone Number"
                                className="form-control"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <InputTextarea
                                className="form-control textarea"
                                placeholder="Your Message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="d-flex justify-content-center">
                        <button className="message-now" type="submit">GET QUOTE NOW</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Faq;
