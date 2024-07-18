import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Faq = () => {
    return (
        <div className="Faq">
            <div className="head">FAQs</div>
            <div className="row d-flex justify-content-between">
                <div className="">
                    <div>
                        <Accordion defaultExpanded>
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
                                        With Coder, clients can hire software developers with ease.
                                    </div>
                                    <ul>
                                        <li className="sm-text">Top vetted profiles available within a week</li>
                                        <li className="sm-text">99% guaranteed remote joining</li>
                                        <li className="sm-text">Best post-hiring services</li>
                                        <li className="sm-text">2-weeks trial period</li>
                                    </ul>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion defaultExpanded>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                <Typography>
                                    What is the process of hiring a developer at Coder?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <div className="text">
                                        With Coder, clients can hire software developers with ease.
                                    </div>
                                    <ul>
                                        <li className="sm-text">Top vetted profiles available within a week</li>
                                        <li className="sm-text">99% guaranteed remote joining</li>
                                        <li className="sm-text">Best post-hiring services</li>
                                        <li className="sm-text">2-weeks trial period</li>
                                    </ul>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion defaultExpanded>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                <Typography>
                                    How do you ensure the security and integrity of the work that Coder
                                    developers do?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <div className="text">
                                        With Coder, clients can hire software developers with ease.
                                    </div>
                                    <ul>
                                        <li className="sm-text">Top vetted profiles available within a week</li>
                                        <li className="sm-text">99% guaranteed remote joining</li>
                                        <li className="sm-text">Best post-hiring services</li>
                                        <li className="sm-text">2-weeks trial period</li>
                                    </ul>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion defaultExpanded>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                <Typography>
                                    What if I’m not satisfied with the Coder’s developer?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <div className="text">
                                        With Coder, clients can hire software developers with ease.
                                    </div>
                                    <ul>
                                        <li className="sm-text">Top vetted profiles available within a week</li>
                                        <li className="sm-text">99% guaranteed remote joining</li>
                                        <li className="sm-text">Best post-hiring services</li>
                                        <li className="sm-text">2-weeks trial period</li>
                                    </ul>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion defaultExpanded>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                <Typography>
                                    Is it possible to hire software engineers through Coder within a week?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <div className="text">
                                        With Coder, clients can hire software developers with ease.
                                    </div>
                                    <ul>
                                        <li className="sm-text">Top vetted profiles available within a week</li>
                                        <li className="sm-text">99% guaranteed remote joining</li>
                                        <li className="sm-text">Best post-hiring services</li>
                                        <li className="sm-text">2-weeks trial period</li>
                                    </ul>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion defaultExpanded>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                <Typography>
                                    Is Coder costlier than other hiring platforms?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <div className="text">
                                        With Coder, clients can hire software developers with ease.
                                    </div>
                                    <ul>
                                        <li className="sm-text">Top vetted profiles available within a week</li>
                                        <li className="sm-text">99% guaranteed remote joining</li>
                                        <li className="sm-text">Best post-hiring services</li>
                                        <li className="sm-text">2-weeks trial period</li>
                                    </ul>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion defaultExpanded>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                <Typography>
                                    How do you ensure the smooth collaboration between developers and clients?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <div className="text">
                                        With Coder, clients can hire software developers with ease.
                                    </div>
                                    <ul>
                                        <li className="sm-text">Top vetted profiles available within a week</li>
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
                        Find Interview-ready
                        candidates in <span>24 hours</span>
                    </div>
                    <div className="input-text-container">
                        <div>
                            <div className="sm-input-text">Book A Call</div>
                        </div>
                        <input type="text" className="form-control" placeholder="Learn more with our experts" />
                    </div>
                    <div className="input-text-container">
                        <div>
                            <div className="sm-input-text">Email Us</div>
                        </div>
                        <input type="text" className="form-control" placeholder="sales@coder.com" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;
