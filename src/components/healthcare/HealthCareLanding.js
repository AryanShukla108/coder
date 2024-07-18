import React from "react";
import { Dropdown } from "primereact/dropdown";

const HealthCareLanding = () => {
    return (
        <div className="HealthCareLanding">
            <div className="row d-flex justify-content-between">
                <div className="col-6 hire-health">
                    <div className="heading-main">
                        Hire <span className="heading-color">Healthcare</span> Software
                        Developers
                    </div>
                    <div className="small-text">
                        Build disruptive digital healthcare solutions by hiring pre-vetted{" "}
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
                        <button className="hireButton">Hire Now</button>
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
                            />
                        </div>
                        <div className="input-space card flex">
                            <Dropdown
                                name="position"
                                placeholder="Position"
                                className="w-full"
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
