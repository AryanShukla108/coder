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
                                        How is Coder different from other hiring platforms?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        <div className="text">
                                            With Coder, clients can hire software developers with
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
                                            With Coder, clients can hire software developers with
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
                                <div className="sm-input-text">Book A Call</div>
                            </div>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Learn more with our experts"
                            />
                        </div>
                        <div className="input-text-container">
                            <div>
                                <div className="sm-input-text">Email Us</div>
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
