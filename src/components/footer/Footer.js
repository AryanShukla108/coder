import React from "react";
import coder from "../../assests/coder.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
    return (
        <div className="Footer">
            <div>
                <img src={coder} alt="coder" className="coder" />
            </div>
            <div className="row">
                <div className="col-3">
                    <div className="linkdin-text">
                        <LinkedInIcon /> Top 20 Indian Startups of 2024
                    </div>
                    <div className="normal-text space">
                        © 2024 Coder Technologies Private Limited. All rights reserved.
                    </div>
                    <div>
                        <div className="head">India Office</div>
                        <div className="haed-text">
                            +91 8879881815 / +91 7738311925 info@coder.com Shop No 2,
                            Vishwakarma Opposite Om Surya apartment Sawarkar Nagar Thane West,
                            Maharashtra ,400606 Open hours: 8.00-18.00 Mon-Fri
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div>
                        <div className="head">Company</div>
                        <div className="haed-text sp" onClick={() => (window.location.href = 'about-us')}>About Us</div>
                        <div className="haed-text sp">Careers</div>
                        <div className="haed-text sp">Customers Review</div>
                        <div className="haed-text sp">The Right Hire</div>
                        <div className="haed-text sp">Blogs</div>
                        <div className="haed-text sp">Events</div>
                        <div className="haed-text sp">Sitemap</div>
                        <div className="haed-text sp" onClick={() => (window.location.href = 'privacy')}>Privacy Policy</div>
                    </div>
                    <div className="d-space">
                        <div className="head">For Customers</div>
                        <div className="haed-text sp">Submit Enquiry</div>
                        <div className="haed-text sp" onClick={() => (window.location.href = 'hire')}>Hire Developer</div>
                    </div>
                    <div className="d-space">
                        <div className="head">For Developers</div>
                        <div className="haed-text sp">Developers</div>
                        <div className="haed-text sp">Developer Sign-up</div>
                        <div className="haed-text sp">Developer Login</div>
                    </div>
                </div>
                <div className="col-3">
                    <div>
                        <div className="head">Tech talent for</div>
                        <div className="haed-text sp" onClick={() => (window.location.href = 'healthcare')}>Bigger Software Companies</div>
                        <div className="haed-text sp" onClick={() => (window.location.href = 'healthcare')}>Healthcare Companies</div>
                        <div className="haed-text sp" onClick={() => (window.location.href = 'healthcare')}>Fintech Companies</div>
                        <div className="haed-text sp" onClick={() => (window.location.href = 'healthcare')}>Startups</div>
                        <div className="haed-text sp" onClick={() => (window.location.href = 'healthcare')}>USA Startups & Businesses</div>
                        <div className="haed-text sp" onClick={() => (window.location.href = 'healthcare')}>Salesforce Need</div>
                        <div className="haed-text sp" onClick={() => (window.location.href = 'healthcare')}>VC Portfolio Companies</div>
                        <div className="haed-text sp" onClick={() => (window.location.href = 'healthcare')}>Pharma Industry</div>
                        <div className="haed-text sp" onClick={() => (window.location.href = 'healthcare')}>ServiceNow</div>
                        <div className="haed-text sp" onClick={() => (window.location.href = 'healthcare')}>Workday</div>
                        <div className="haed-text sp" onClick={() => (window.location.href = 'healthcare')}>SAP</div>
                    </div>
                    <div className="d-space">
                        <div className="head">Compare</div>
                        <div className="haed-text sp" onClick={() => (window.location.href = 'service-other')}>Coder Vs. Turing</div>
                        <div className="haed-text sp" onClick={() => (window.location.href = 'service-other')}>Coder Vs. Andela</div>
                        <div className="haed-text sp" onClick={() => (window.location.href = 'service-other')}>Coder Vs. Upwork</div>
                        <div className="haed-text sp" onClick={() => (window.location.href = 'service-other')}>
                            Coder Vs. Top IT Services Companies
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="icon-div">
                        <div>
                            <LinkedInIcon className="icon-color" />
                        </div>
                        <div>
                            <InstagramIcon className="icon-color" />
                        </div>
                        <div>
                            <XIcon className="icon-color" />
                        </div>
                        <div>
                            <FacebookIcon className="icon-color" />
                        </div>
                        <div>
                            <YouTubeIcon className="icon-color" />
                        </div>
                    </div>
                    <div className="d-space">
                        <div className="head">Locations</div>
                        <div className="haed-text sp">Bangalore, India</div>
                        <div className="haed-text sp">Indore, India</div>
                        <div className="haed-text sp">Pune, India</div>
                        <div className="haed-text sp">New Delhi, India</div>
                        <div className="haed-text sp">Coimbatore, India</div>
                        <div className="haed-text sp">USA</div>
                        <div className="haed-text sp">Dubai</div>
                        <div className="haed-text sp">Japan</div>
                        <div className="haed-text sp">Melbourne, Australia</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
