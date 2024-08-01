import React from "react";
import hire from "../../assests/bg.png";
import flag from "../../assests/flag.png";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';


const Connect = () => {
    return (
        <div className="Connect-hire d-flex">
            <div className="form-hire-page">
                <div className="heading-main">
                    Start Hiring with a{" "}
                    <span className="heading-color">Perfect Developer!</span>
                </div>
                <form>
                    <div className="info">Contact information</div>
                    <div className="from-data">
                        <label htmlFor="name">
                            First Name<span className="mandatory">*</span>
                        </label>
                        <input type="text" className="form-control" placeholder="name" />
                    </div>
                    <div className="from-data">
                        <label htmlFor="name">
                            Last Name<span className="mandatory">*</span>
                        </label>
                        <input type="text" className="form-control" placeholder="surname" />
                    </div>
                    <div className="row">
                        <div className="from-data col-6">
                            <label htmlFor="name">
                                Email<span className="mandatory">*</span>
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="eg123@gmail.com"
                            />
                        </div>
                        <div className="from-data col-6">
                            <label htmlFor="name">
                                Phone Number<span className="mandatory">*</span>
                            </label>
                            <div className="d-flex align-items-center">
                                <span className="countrycode">
                                    {" "}
                                    <img src={flag} alt="flag" className="flag" /> +91
                                </span>
                                <input
                                    type="number"
                                    className="form-control ind-input"
                                    placeholder="phone number"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="from-data">
                        <label htmlFor="looking">
                            What are you looking for?<span className="mandatory">*</span>
                        </label>
                        <div className="job-card">
                            <div className="box">
                                <div>
                                    <svg
                                        width="40"
                                        height="40"
                                        viewBox="0 0 40 40"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clip-path="url(#clip0_94_685)">
                                            <path
                                                d="M27.1262 23.532L21.5491 19.3492V10.8288C21.5491 9.97204 20.8566 9.27954 19.9999 9.27954C19.1432 9.27954 18.4507 9.97204 18.4507 10.8288V20.1239C18.4507 20.6119 18.68 21.072 19.0704 21.3633L25.2671 26.0109C25.5459 26.22 25.8713 26.3207 26.1951 26.3207C26.6676 26.3207 27.1323 26.1084 27.436 25.6995C27.9504 25.0162 27.811 24.0449 27.1262 23.532Z"
                                                fill="url(#paint0_linear_94_685)"
                                            />
                                            <path
                                                d="M20 0C8.97133 0 0 8.97133 0 20C0 31.0287 8.97133 40 20 40C31.0287 40 40 31.0287 40 20C40 8.97133 31.0287 0 20 0ZM20 36.9016C10.6816 36.9016 3.09836 29.3184 3.09836 20C3.09836 10.6816 10.6816 3.09836 20 3.09836C29.3199 3.09836 36.9016 10.6816 36.9016 20C36.9016 29.3184 29.3184 36.9016 20 36.9016Z"
                                                fill="url(#paint1_linear_94_685)"
                                            />
                                        </g>
                                        <defs>
                                            <linearGradient
                                                id="paint0_linear_94_685"
                                                x1="23.0986"
                                                y1="9.27954"
                                                x2="23.0986"
                                                y2="26.3207"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stop-color="#FEBF24" />
                                                <stop offset="1" stop-color="#EA4232" />
                                            </linearGradient>
                                            <linearGradient
                                                id="paint1_linear_94_685"
                                                x1="20"
                                                y1="0"
                                                x2="20"
                                                y2="40"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stop-color="#FEBF24" />
                                                <stop offset="1" stop-color="#EA4232" />
                                            </linearGradient>
                                            <clipPath id="clip0_94_685">
                                                <rect width="40" height="40" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <div className="txt">Remote</div>
                            </div>
                            <div className="box">
                                <svg
                                    width="40"
                                    height="40"
                                    viewBox="0 0 40 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M20 23.75C20.6904 23.75 21.25 23.1904 21.25 22.5C21.25 21.8096 20.6904 21.25 20 21.25C19.3096 21.25 18.75 21.8096 18.75 22.5C18.75 23.1904 19.3096 23.75 20 23.75Z"
                                        fill="url(#paint0_linear_94_692)"
                                    />
                                    <path
                                        d="M36.25 19.1625L23.75 22.7375C23.75 23.7321 23.3549 24.6859 22.6517 25.3892C21.9484 26.0924 20.9946 26.4875 20 26.4875C19.0054 26.4875 18.0516 26.0924 17.3483 25.3892C16.6451 24.6859 16.25 23.7321 16.25 22.7375L3.75 19.1625L1.25 18.4375V32.5C1.25 33.4946 1.64509 34.4484 2.34835 35.1517C3.05161 35.8549 4.00544 36.25 5 36.25H35C35.9946 36.25 36.9484 35.8549 37.6516 35.1517C38.3549 34.4484 38.75 33.4946 38.75 32.5V18.4375L36.25 19.1625Z"
                                        fill="url(#paint1_linear_94_692)"
                                    />
                                    <path
                                        d="M35 8.75H27.5V7.5C27.5 6.50544 27.1049 5.55161 26.4017 4.84835C25.6984 4.14509 24.7446 3.75 23.75 3.75H16.25C15.2554 3.75 14.3016 4.14509 13.5983 4.84835C12.8951 5.55161 12.5 6.50544 12.5 7.5V8.75H5C4.00544 8.75 3.05161 9.14509 2.34835 9.84835C1.64509 10.5516 1.25 11.5054 1.25 12.5V15.8375L3.75 16.5625L16.95 20.3125C17.297 19.8274 17.7548 19.432 18.2852 19.1593C18.8157 18.8865 19.4035 18.7442 20 18.7442C20.5965 18.7442 21.1843 18.8865 21.7148 19.1593C22.2452 19.432 22.703 19.8274 23.05 20.3125L36.25 16.5625L38.75 15.8375V12.5C38.75 11.5054 38.3549 10.5516 37.6516 9.84835C36.9484 9.14509 35.9946 8.75 35 8.75ZM15 7.5C15 7.16848 15.1317 6.85054 15.3661 6.61612C15.6005 6.3817 15.9185 6.25 16.25 6.25H23.75C24.0815 6.25 24.3995 6.3817 24.6339 6.61612C24.8683 6.85054 25 7.16848 25 7.5V8.75H15V7.5Z"
                                        fill="url(#paint2_linear_94_692)"
                                    />
                                    <defs>
                                        <linearGradient
                                            id="paint0_linear_94_692"
                                            x1="20"
                                            y1="21.25"
                                            x2="20"
                                            y2="23.75"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stop-color="#FEBF24" />
                                            <stop offset="1" stop-color="#EA4232" />
                                        </linearGradient>
                                        <linearGradient
                                            id="paint1_linear_94_692"
                                            x1="20"
                                            y1="18.4375"
                                            x2="20"
                                            y2="36.25"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stop-color="#FEBF24" />
                                            <stop offset="1" stop-color="#EA4232" />
                                        </linearGradient>
                                        <linearGradient
                                            id="paint2_linear_94_692"
                                            x1="20"
                                            y1="3.75"
                                            x2="20"
                                            y2="20.3125"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stop-color="#FEBF24" />
                                            <stop offset="1" stop-color="#EA4232" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <div className="txt">On-Site</div>
                            </div>
                            <div className="box">
                                <svg
                                    width="40"
                                    height="40"
                                    viewBox="0 0 40 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M5.00016 14.9999H14.8085C15.0914 14.999 15.3697 15.0705 15.6171 15.2076C15.8645 15.3447 16.0727 15.5429 16.2218 15.7833L18.8585 19.9999L16.2302 24.2166C16.0813 24.4568 15.8734 24.655 15.6263 24.7921C15.3792 24.9292 15.1011 25.0008 14.8185 24.9999H5.01016C4.56814 24.9999 4.14421 25.1755 3.83165 25.4881C3.51909 25.8007 3.3435 26.2246 3.3435 26.6666C3.3435 27.1086 3.51909 27.5326 3.83165 27.8451C4.14421 28.1577 4.56814 28.3333 5.01016 28.3333H14.8202C15.6691 28.3359 16.5045 28.121 17.2468 27.709C17.989 27.2971 18.6134 26.7018 19.0602 25.9799L20.8252 23.1466L22.5985 25.9799C23.0439 26.7026 23.6669 27.2991 24.4083 27.7125C25.1497 28.1259 25.9846 28.3425 26.8335 28.3416H30.9568L30.4752 28.8233C30.1718 29.1378 30.0041 29.559 30.0082 29.996C30.0123 30.4329 30.1879 30.8508 30.4971 31.1596C30.8063 31.4684 31.2245 31.6434 31.6615 31.6469C32.0985 31.6504 32.5194 31.4821 32.8335 31.1783L36.1385 27.8749C36.302 27.7225 36.4328 27.5385 36.523 27.334C36.6132 27.1295 36.661 26.9088 36.6633 26.6853C36.6656 26.4618 36.6225 26.2402 36.5366 26.0338C36.4507 25.8275 36.3238 25.6407 36.1635 25.4849L32.8435 22.1516C32.5312 21.8387 32.1074 21.6626 31.6653 21.6621C31.2232 21.6616 30.799 21.8368 30.486 22.1491C30.173 22.4614 29.997 22.8852 29.9965 23.3273C29.996 23.7695 30.1712 24.1937 30.4835 24.5066L30.9735 24.9983H26.8335C26.5506 24.9994 26.2722 24.928 26.0247 24.7908C25.7773 24.6537 25.5692 24.4554 25.4202 24.2149L22.7885 19.9999L25.4268 15.7716C25.5758 15.5311 25.784 15.3329 26.0314 15.1957C26.2788 15.0586 26.5573 14.9872 26.8402 14.9883H30.9768L30.4868 15.4799C30.1836 15.7947 30.0162 16.216 30.0206 16.653C30.025 17.09 30.2009 17.5078 30.5104 17.8163C30.8198 18.1249 31.2381 18.2996 31.6751 18.3028C32.1122 18.306 32.5329 18.1374 32.8468 17.8333L36.1668 14.4999C36.3271 14.3441 36.454 14.1574 36.54 13.9511C36.6259 13.7447 36.669 13.5231 36.6666 13.2996C36.6643 13.0761 36.6166 12.8554 36.5264 12.6509C36.4361 12.4464 36.3053 12.2624 36.1418 12.1099L32.8335 8.82161C32.5192 8.51802 32.0982 8.35003 31.6612 8.35382C31.2242 8.35762 30.8061 8.5329 30.4971 8.84192C30.1881 9.15093 30.0128 9.56895 30.009 10.0059C30.0052 10.4429 30.1732 10.8639 30.4768 11.1783L30.9618 11.6666H26.8335C25.9846 11.664 25.1491 11.8789 24.4069 12.2909C23.6646 12.7028 23.0403 13.2981 22.5935 14.0199L20.8185 16.8633L19.0502 14.0166C18.6029 13.2954 17.9785 12.7008 17.2362 12.2894C16.494 11.878 15.6588 11.6636 14.8102 11.6666H5.00016C4.55814 11.6666 4.13421 11.8422 3.82165 12.1548C3.50909 12.4673 3.3335 12.8913 3.3335 13.3333C3.3335 13.7753 3.50909 14.1992 3.82165 14.5118C4.13421 14.8244 4.55814 14.9999 5.00016 14.9999Z"
                                        fill="url(#paint0_linear_94_697)"
                                    />
                                    <defs>
                                        <linearGradient
                                            id="paint0_linear_94_697"
                                            x1="20.0001"
                                            y1="8.35376"
                                            x2="20.0001"
                                            y2="31.647"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stop-color="#FEBF24" />
                                            <stop offset="1" stop-color="#EA4232" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <div className="txt">Anything Works</div>
                            </div>
                        </div>
                    </div>
                    <div className="skills">
                        <div className="skills-head">Select the skills you're looking for?</div>
                        <input type="text" placeholder="Search skills...|" className="form-control" />
                    </div>

                    <div className="trend">
                        <div className="search">Trending searches</div>
                        <div className="d-flex" style={{ gap: "12px" }}>
                            <div className="box-skilss">
                                React js
                            </div>
                            <div className="box-skilss">
                                Python
                            </div> <div className="box-skilss">
                                Angular
                            </div> <div className="box-skilss">
                                Fullstack
                            </div> <div className="box-skilss">
                                Others
                            </div>
                        </div>
                    </div>

                    <div className="d-flex justify-content-center">
                        <button className="lets-connect">Let's Connect  <ArrowRightAltIcon /></button>
                    </div>

                </form>
            </div>
            <div>
                <img className="hire-img" src={hire} alt="hire" />
            </div>
        </div>
    );
};

export default Connect;
