import React, { useState } from "react";
import jobimg from "../../assests/resume.png";
import CheckIcon from "@mui/icons-material/Check";
import flag from "../../assests/flag.png";
import { Dropdown } from "primereact/dropdown";


const JobHired = () => {


    const [selectYear, setSelectYear] = useState(null);
    const [selectMonth, setSelectMonth] = useState(null);
    const [selectSkills, setSelectSkills] = useState(null);
    const [selectExp, setSelectExp] = useState(null);

    const years = [
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' },
        { value: '4', label: '4' },
        { value: '5', label: '5' },
        { value: '6', label: '6' },
        { value: '7', label: '7' },
        { value: '8', label: '8' },
        { value: '9', label: '9' }
    ]

    const months = [
        { value: 'january', label: 'January' },
        { value: 'february', label: 'February' },
        { value: 'march', label: 'March' },
        { value: 'april', label: 'April' },
        { value: 'may', label: 'May' },
        { value: 'june', label: 'June' },
        { value: 'july', label: 'July' },
        { value: 'august', label: 'August' },
        { value: 'september', label: 'September' },
        { value: 'october', label: 'October' },
        { value: 'november', label: 'November' },
        { value: 'december', label: 'December' }
    ]

    const exp = [
        { value: '0-1', label: '0-1 Year' },
        { value: '2-3', label: '2-3 Years' },
        { value: '4-5', label: '4-5 Years' },
        { value: '6-7', label: '6-7 Years' },
        { value: '8-10', label: '8-10 Years' },
        { value: '10+', label: '10+ Years' }
    ]


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
                                    value={selectYear} onChange={(e) => setSelectYear(e.value)} options={years} 
                                />
                            </div>
                            <div className="card col-6">
                                <Dropdown
                                    name="cityState"
                                    placeholder="Select Month"
                                    className="w-full"
                                    value={selectMonth} onChange={(e) => setSelectMonth(e.value)} options={months} 
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
                                        value={selectSkills} onChange={(e) => setSelectSkills(e.value)}
                                />
                            </div>
                            <div className="card col-6">
                                <Dropdown
                                    name="cityState"
                                    placeholder="Select Exp Year"
                                    className="w-full"
                                    value={selectExp} onChange={(e) => setSelectExp(e.value)} options={exp} 
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
                        <div className="availibility" style={{ gap: "22px" }}>
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
