import React, { useState } from "react";
import { InputTextarea } from "primereact/inputtextarea";


const generateMailtoLink = (name, company, email, phone, message) => {
    const subject = encodeURIComponent("Contact Form Submission");
    const body = encodeURIComponent(`Name: ${name}\nCompany: ${company}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`);
    return `mailto:${email}?subject=${subject}&body=${body}`;
};

const ContactUsForm = () => {

    const [name, setName] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();
        const mailtoLink = generateMailtoLink(name, lastName, email, phone, message);
        window.location.href = mailtoLink; // Open the mail client with pre-filled information
    };


    return (
        <>
            <div className="ContactUsForm">
                <div className="main-card">
                    <div className="main-box">
                        <div className="box">
                            <div className="icon-div">
                                <svg
                                    width="60"
                                    height="60"
                                    viewBox="0 0 60 60"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M54.9996 42.3V49.8C55.0024 50.4963 54.8598 51.1854 54.5809 51.8234C54.3019 52.4613 53.8928 53.034 53.3798 53.5047C52.8667 53.9754 52.261 54.3337 51.6015 54.5568C50.9419 54.7798 50.243 54.8627 49.5496 54.8C41.8567 53.9641 34.4671 51.3354 27.9746 47.125C21.9342 43.2867 16.8129 38.1654 12.9746 32.125C8.74953 25.603 6.1202 18.1775 5.29959 10.45C5.23711 9.75867 5.31928 9.0619 5.54084 8.40406C5.7624 7.74622 6.11852 7.14172 6.5865 6.62905C7.05449 6.11638 7.6241 5.70677 8.25907 5.4263C8.89403 5.14583 9.58044 5.00065 10.2746 5H17.7746C18.9879 4.98806 20.1641 5.41769 21.084 6.20883C22.0039 6.99997 22.6048 8.09861 22.7746 9.3C23.0911 11.7002 23.6782 14.0568 24.5246 16.325C24.8609 17.2198 24.9337 18.1923 24.7344 19.1272C24.535 20.0621 24.0717 20.9203 23.3996 21.6L20.2246 24.775C23.7835 31.0339 28.9657 36.2161 35.2246 39.775L38.3996 36.6C39.0793 35.9278 39.9375 35.4646 40.8724 35.2652C41.8073 35.0658 42.7798 35.1386 43.6746 35.475C45.9428 36.3214 48.2994 36.9084 50.6996 37.225C51.914 37.3963 53.0231 38.008 53.8159 38.9437C54.6088 39.8795 55.03 41.0739 54.9996 42.3Z"
                                        stroke="url(#paint0_linear_274_15976)"
                                        stroke-width="6"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <defs>
                                        <linearGradient
                                            id="paint0_linear_274_15976"
                                            x1="30.1402"
                                            y1="4.99976"
                                            x2="30.1402"
                                            y2="54.8203"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stop-color="#FEBF24" />
                                            <stop offset="1" stop-color="#EA4232" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <div className="txt1">Phone Number</div>
                            <div className="txt2">+91 8879881815 / +91 7738311925</div>
                        </div>
                        <div className="box">
                            <div className="icon-div">
                                <svg
                                    width="60"
                                    height="60"
                                    viewBox="0 0 60 60"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g clip-path="url(#clip0_274_15982)">
                                        <path
                                            d="M52.5 25C52.5 42.5 30 57.5 30 57.5C30 57.5 7.5 42.5 7.5 25C7.5 19.0326 9.87053 13.3097 14.0901 9.0901C18.3097 4.87053 24.0326 2.5 30 2.5C35.9674 2.5 41.6903 4.87053 45.9099 9.0901C50.1295 13.3097 52.5 19.0326 52.5 25Z"
                                            stroke="url(#paint0_linear_274_15982)"
                                            stroke-width="6"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M30 32.5C34.1421 32.5 37.5 29.1421 37.5 25C37.5 20.8579 34.1421 17.5 30 17.5C25.8579 17.5 22.5 20.8579 22.5 25C22.5 29.1421 25.8579 32.5 30 32.5Z"
                                            stroke="url(#paint1_linear_274_15982)"
                                            stroke-width="6"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </g>
                                    <defs>
                                        <linearGradient
                                            id="paint0_linear_274_15982"
                                            x1="30"
                                            y1="2.5"
                                            x2="30"
                                            y2="57.5"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stop-color="#FEBF24" />
                                            <stop offset="1" stop-color="#EA4232" />
                                        </linearGradient>
                                        <linearGradient
                                            id="paint1_linear_274_15982"
                                            x1="30"
                                            y1="17.5"
                                            x2="30"
                                            y2="32.5"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stop-color="#FEBF24" />
                                            <stop offset="1" stop-color="#EA4232" />
                                        </linearGradient>
                                        <clipPath id="clip0_274_15982">
                                            <rect width="60" height="60" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div className="txt1">Our Location</div>
                            <div className="txt2">
                                plot no.921, Rani Avantibai Rd, Near Huda Market, Mohyal Colony, Sector 40, Gurugram, Haryana 122001
                            </div>
                        </div>
                        <div className="box">
                            <div className="icon-div">
                                <svg
                                    width="60"
                                    height="60"
                                    viewBox="0 0 60 60"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g clip-path="url(#clip0_274_15989)">
                                        <path
                                            d="M9.88574 9.50269H49.8857C52.6357 9.50269 54.8857 11.7527 54.8857 14.5027V44.5027C54.8857 47.2527 52.6357 49.5027 49.8857 49.5027H9.88574C7.13574 49.5027 4.88574 47.2527 4.88574 44.5027V14.5027C4.88574 11.7527 7.13574 9.50269 9.88574 9.50269Z"
                                            stroke="url(#paint0_linear_274_15989)"
                                            stroke-width="6"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M54.8857 14.5027L29.8857 32.0027L4.88574 14.5027"
                                            stroke="url(#paint1_linear_274_15989)"
                                            stroke-width="6"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </g>
                                    <defs>
                                        <linearGradient
                                            id="paint0_linear_274_15989"
                                            x1="29.8857"
                                            y1="9.50269"
                                            x2="29.8857"
                                            y2="49.5027"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stop-color="#FEBF24" />
                                            <stop offset="1" stop-color="#EA4232" />
                                        </linearGradient>
                                        <linearGradient
                                            id="paint1_linear_274_15989"
                                            x1="29.8857"
                                            y1="14.5027"
                                            x2="29.8857"
                                            y2="32.0027"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stop-color="#FEBF24" />
                                            <stop offset="1" stop-color="#EA4232" />
                                        </linearGradient>
                                        <clipPath id="clip0_274_15989">
                                            <rect width="60" height="60" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div className="txt1">Our Email</div>
                            <div className="txt2">info@sovtechnologies.com</div>
                        </div>
                    </div>
                    <div className="send-mess">Send Us Message</div>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-6">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="First Name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className="col-6">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Last Name"
                                        value={lastName}
                                        onChange={(e) => setlastName(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Phone Number"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </div>
                                <div className="col-6">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Your Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    {/* <input type="textarea" className="form-control textarea" placeholder="Your Message" /> */}
                                    <InputTextarea
                                        className="form-control textarea"
                                        placeholder="Your Message"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                    />
                                </div>
                            </div>

                            <button className="send" type="submit"> Send Message</button>
                        </form>
                    </div>
                </div>
                <div className="stats">
                    <div className="heading-color">Buzz Stats.</div>
                    <div className="stats-card">
                        <div className="stats-box">
                            <div className="num">30<span className="plus">+</span></div>
                            <div className="stats-txt">Happy Clients</div>
                            <div className="stats-para">
                                Number of satisfied clients who have benefited from our services.
                            </div>
                        </div>
                        <div className="stats-box">
                            <div className="num">100<span className="plus">+</span></div>
                            <div className="stats-txt">Projects Completed</div>
                            <div className="stats-para">
                                Total projects successfully delivered across various industries.
                            </div>
                        </div>
                        <div className="stats-box">
                            <div className="num">36<span className="plus">+</span></div>
                            <div className="stats-txt">Team Members</div>
                            <div className="stats-para">
                                Talent wins games, but teamwork and intelligence wins championships.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contactus-schdulecall">
                <div className="schdulecall-card">
                    <div className="inner-card">
                        <div className="heading-color">Interested in Working Together?</div>
                        <div className="para">Orci at id enim eu pellentesque habitant. Ut at diam suscipit amet id cursus id blandit. Consectetur maecenas id vivamus integer integer aliquam.</div>
                        <button className="call-btn" onClick={() => (window.location.href = "hire")}>Schedule a Call</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactUsForm;
