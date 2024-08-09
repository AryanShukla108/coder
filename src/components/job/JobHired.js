import React from "react";
import jobimg from "../../assests/resume.png";
import CheckIcon from "@mui/icons-material/Check";
import flag from "../../assests/flag.png";
import { Dropdown } from "primereact/dropdown";


const JobHired = () => {
    return (
        <div className="JobHired">
            <div className="img-div">
                <img src={jobimg} alt="jobimg" className="jobimg" />
                {/* <div className="text">
                    <div className="text-1">Success starts here</div>
                    <div className="text-2">
                        <CheckIcon /> Over 600 categories
                    </div>
                    <div className="text-2">
                        <CheckIcon /> Pay per project, not per hour
                    </div>
                    <div className="text-2 d-flex">
                        <div>
                            {" "}
                            <CheckIcon />
                        </div>{" "}
                        <div>Access to talent and businesses across the globe</div>
                    </div>
                </div> */}
            </div>
            <div className="form-job">
                <div className="job-txt"  onClick={() => (window.location.href = 'hire')}>Lets Get Hired</div>
                <form>
                    <div className="row form-data">
                        <div className="col-6">
                            <label htmlFor="name">
                                First Name<span className="mandatory">*</span>
                            </label>
                            <input type="text" className="form-control" placeholder="name" />
                        </div>
                        <div className="col-6">
                            <label htmlFor="name">
                                Last Name<span className="mandatory">*</span>
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="surname"
                            />
                        </div>
                    </div>
                    <div className="row form-data">
                        <div className="col-6">
                            <label htmlFor="name">
                                Email<span className="mandatory">*</span>
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="eg123@gmail.com"
                            />
                        </div>
                        <div className="col-6">
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
                    <div className="row form-data">
                        <div className="col-6">
                            <label htmlFor="name">
                                Loaction<span className="mandatory">*</span>
                            </label>
                            <input type="text" className="form-control" placeholder="Loaction" />
                        </div>
                        <div className="col-6">
                            <label htmlFor="name">
                                Current Role<span className="mandatory">*</span>
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Current Role"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="name">
                            Year Of Experience<span className="mandatory">*</span>
                        </label>
                        <div className="row">
                            <div className="card col-6">
                                <Dropdown
                                    name="cityState"
                                    placeholder="Select Year"
                                    className="w-full"
                                />
                            </div>
                            <div className="card col-6">
                                <Dropdown
                                    name="cityState"
                                    placeholder="Select Month"
                                    className="w-full"
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="name">
                            Technical Skills<span className="mandatory">*</span>
                        </label>
                        <div className="row">
                            <div className="card col-6">
                                <Dropdown
                                    name="cityState"
                                    placeholder="Search Your Skills "
                                    className="w-full"
                                    options={[  "Jest",
                                        "Mocha",
                                        "Jasmine",
                                        "Cypress",
                                        "Selenium",
                                        "Puppeteer",
                                        "JMeter",
                                        "LoadRunner"]}
                                />
                            </div>
                            <div className="card col-6">
                                <Dropdown
                                    name="cityState"
                                    placeholder="Select Exp Year"
                                    className="w-full"
                                />
                            </div>
                        </div>
                        {/* <div className="row">
                            <div className="card col-6">
                                <Dropdown
                                    name="cityState"
                                    placeholder="Search Your Skills "
                                    className="w-full"
                                />
                            </div>
                            <div className="card col-6">
                                <Dropdown
                                    name="cityState"
                                    placeholder="Select Exp Year"
                                    className="w-full"
                                />
                            </div>
                        </div><div className="row">
                            <div className="card col-6">
                                <Dropdown
                                    name="cityState"
                                    placeholder="Search Your Skills "
                                    className="w-full"
                                />
                            </div>
                            <div className="card col-6">
                                <Dropdown
                                    name="cityState"
                                    placeholder="Select Exp Year"
                                    className="w-full"
                                />
                            </div>
                        </div> */}
                    </div>
                    <div>
                        <label htmlFor="name">
                            Upload Your Updated Resume<span className="mandatory">*</span>
                        </label>
                        <div className="resume">
                            <div> <span className="red">Browse</span> and Upload Resume</div>
                            <div className="small-text">Files support (.pdf, .doc, .docs), Size of each document can be up tp 5 MB</div>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="name">
                            Your Availability For Call
                        </label>
                        <div className="d-flex" style={{ gap: "22px" }}>
                            <div className="d-flex radio-div">
                                <div> <input type="radio" className="radio" /></div>
                                <div className="time">10:00 am - 12.00 pm</div>
                            </div>   <div className="d-flex radio-div">
                                <div> <input type="radio" className="radio" /></div>
                                <div className="time">12:00 pm - 2.00 pm</div>
                            </div>
                            <div className="d-flex radio-div">
                                <div> <input type="radio" className="radio" /></div>
                                <div className="time">2:00 pm - 4.00 pm</div>
                            </div>
                            
                        </div>
                    </div>
                    <button className="drem-job">Find Dream Jobs</button>
                </form>
            </div>
        </div>
    );
};

export default JobHired;
