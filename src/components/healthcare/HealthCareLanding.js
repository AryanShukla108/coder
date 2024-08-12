import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const HealthCareLanding = () => {

    const currentURL = window.location.href;

    const checkURL = (substring) => currentURL.includes(substring);
    const [selectedCity, setSelectedCity] = useState(null);
    const [selectedPos, setSelectedPos] = useState(null);

    const cities = [
        { value: 'delhi', label: 'Delhi' },
        { value: 'mumbai', label: 'Mumbai' },
        { value: 'bangalore', label: 'Bangalore' },
        { value: 'kolkata', label: 'Kolkata' },
        { value: 'chennai', label: 'Chennai' },
        { value: 'hyderabad', label: 'Hyderabad' },
        { value: 'pune', label: 'Pune' },
        { value: 'ahmedabad', label: 'Ahmedabad' },
        { value: 'jaipur', label: 'Jaipur' },
        { value: 'surat', label: 'Surat' },
        { value: 'kanpur', label: 'Kanpur' },
        { value: 'nagpur', label: 'Nagpur' },
        { value: 'lucknow', label: 'Lucknow' },
        { value: 'indore', label: 'Indore' },
        { value: 'bhopal', label: 'Bhopal' }
    ]

    const postion = [
        { value: 'doctor', label: 'Doctor' },
        { value: 'nurse', label: 'Nurse' },
        { value: 'pharmacist', label: 'Pharmacist' },
        { value: 'radiologist', label: 'Radiologist' },
        { value: 'surgeon', label: 'Surgeon' },
        { value: 'therapist', label: 'Therapist' },
        { value: 'dentist', label: 'Dentist' },
        { value: 'optometrist', label: 'Optometrist' },
        { value: 'medical_assistant', label: 'Medical Assistant' },
        { value: 'anesthesiologist', label: 'Anesthesiologist' },
        { value: 'pathologist', label: 'Pathologist' },
        { value: 'emergency_medical_technician', label: 'Emergency Medical Technician (EMT)' },
        { value: 'clinical_lab_scientist', label: 'Clinical Lab Scientist' },
        { value: 'nutritionist', label: 'Nutritionist' },
        { value: 'psychiatrist', label: 'Psychiatrist' }
    ]

    const handleNavigation = (path) => {
        window.location.href = path;
    };

    const getDynamicText = () => {
        if (checkURL("healthcare-companies")) return "Healthcare";
        if (checkURL("healthcare-enterprise")) return "Enterprise";
        if (checkURL("healthcare-fintech")) return "Fintech";
        if (checkURL("healthcare-startup")) return "Startup";
        if (checkURL("usa-startup-bussinesses")) return "USA Startup";
        if (checkURL("healthcare-salesforce")) return "Salesforce";
        if (checkURL("healthcare-portfolio")) return "VC Portfolio";
        if (checkURL("healthcare-pharma")) return "Pharma";
        if (checkURL("healthcare-service")) return "Service";
        if (checkURL("healthcare-workday")) return "Workday";
        if (checkURL("healthcare-sap")) return "SAP";
        return "Healthcare"; // Default text
    };

    const showHealthcare = checkURL("healthcare-companies");
    const enterprise = checkURL("healthcare-enterprise");
    const fintech = checkURL("healthcare-fintech");
    const startup = checkURL("healthcare-startup");
    const startupBusiness = checkURL("usa-startup-bussinesses");
    const salesforce = checkURL("healthcare-salesforce");
    const portfolio = checkURL("healthcare-portfolio");
    const pharma = checkURL("healthcare-pharma");
    const service = checkURL("healthcare-service");
    const workday = checkURL("healthcare-workday");
    const sap = checkURL("healthcare-sap");


    return (
        <div className="HealthCareLanding">
            <div className="row d-flex justify-content-between">
                <div className="col-6 hire-health">
                    {showHealthcare && (
                        <div className="heading-main" onClick={() => handleNavigation("healthcare-companies")}>
                            Hire <span className="heading-color">Healthcare</span>
                            <div>
                                Software
                                Developers
                            </div>
                        </div>
                    )}
                    {enterprise && (
                        <div className="heading-main" onClick={() => handleNavigation("healthcare-enterprise")}>
                            Hire <span className="heading-color">Enterprise</span>
                            <div>
                                Software
                                Developers
                            </div>
                        </div>
                    )}
                    {fintech && (
                        <div className="heading-main" onClick={() => handleNavigation("healthcare-fintech")}>
                            Hire <span className="heading-color">Fintech</span>
                            <div>
                                Software
                                Developers
                            </div>
                        </div>
                    )}
                    {startup && (
                        <div className="heading-main" onClick={() => handleNavigation("healthcare-startup")}>
                            Hire <span className="heading-color">Startups</span>
                            <div>
                                Software
                                Developers
                            </div>
                        </div>
                    )}
                    {startupBusiness && (
                        <div className="heading-main" onClick={() => handleNavigation("usa-startup-bussinesses")}>
                            Hire <span className="heading-color">USA Startups & Businesses</span>
                            <div>
                                Software
                                Developers
                            </div>
                        </div>
                    )}
                    {salesforce && (
                        <div className="heading-main" onClick={() => handleNavigation("healthcare-salesforce")}>
                            Hire <span className="heading-color">Salesforce</span>
                            <div>
                                Software
                                Developers
                            </div>
                        </div>
                    )}
                    {portfolio && (
                        <div className="heading-main" onClick={() => handleNavigation("healthcare-portfolio")}>
                            Hire <span className="heading-color">Vc Portfolio</span>
                            <div>
                                Software
                                Developers
                            </div>
                        </div>
                    )}
                    {pharma && (
                        <div className="heading-main" onClick={() => handleNavigation("healthcare-pharma")}>
                            Hire <span className="heading-color">Pharma</span>
                            <div>
                                Software
                                Developers
                            </div>
                        </div>
                    )}
                    {service && (
                        <div className="heading-main" onClick={() => handleNavigation("healthcare-service")}>
                            Hire <span className="heading-color">ServiceNow</span>
                            <div>
                                Software
                                Developers
                            </div>
                        </div>
                    )}
                    {workday && (
                        <div className="heading-main" onClick={() => handleNavigation("healthcare-workday")}>
                            Hire <span className="heading-color">Workday</span>
                            <div>
                                Software
                                Developers
                            </div>
                        </div>
                    )}
                    {sap && (
                        <div className="heading-main" onClick={() => handleNavigation("healthcare-sap")}>
                            Hire <span className="heading-color">SAP</span>
                            <div> Software
                                Developers</div>
                        </div>
                    )}

                    <div className="small-text">
                        Build disruptive digital {getDynamicText()} solutions by hiring pre-vetted{" "}
                        <span className="small-higlight">
                            top medical developers with strong technical and communication{" "}
                        </span>{" "}
                        that perfectly aligns with your job requirements.
                    </div>
                    <div className="hireNowContainer">
                        <input
                            type="email"
                            placeholder="Your work email"
                            className="emailInput"
                        />
                        <button className="hireButton" onClick={() => (window.location.href = '/hire')}>Hire Now  <ArrowForwardIcon /></button>
                    </div>
                </div>
                <form>
                    <div className="col-6 form-page-health">
                        <div className="register">Registration Form</div>
                        <div className="input-space">
                            <input type="name" className="form-control" placeholder="Name" />
                        </div>
                        <div className="input-space">
                            <input
                                type="Email"
                                className="form-control"
                                placeholder="Email"
                            />
                        </div>
                        <div className="input-space">
                            <input
                                type="PhoneNumber"
                                className="form-control"
                                placeholder="Phone Number"
                            />
                        </div>
                        <div className="input-space card flex">
                        <Dropdown
    name="cityState"
    placeholder="City/State"
    className="w-full"
    value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities}
/>
                        </div>
                        <div className="input-space card flex">
                            <Dropdown
                                name="position"
                                placeholder="Position"
                                className="w-full"
                                value={selectedPos} onChange={(e) => setSelectedPos(e.value)} options={postion}
                            />
                        </div>
                        <button className="health-submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default HealthCareLanding;
